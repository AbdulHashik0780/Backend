const Joi = require('@hapi/joi');

const db = require('../../db/postgresDB/models');
const { generateToken } = require('../../helpers/generateToken');
const { encrypt, decrypt } = require('../../util/encryption');
const { createRandomSuggestedProducts } = require('../../scripts/seeders/suggestedProducts');

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const user = await db.User.findOne({
      where: { email },
      raw: true
    });

    if (!user) {
      return res.json({
        success: false,
        message: 'Invalid email or password',
      });
    }

    const decryptedPassword = decrypt(user.password);

    if (decryptedPassword !== password.toString()) return res.json({ success: false, message: 'Invalid email or password' });

    const token = generateToken(user.id, email);

    return res.json({
      success: true,
      message: 'User data fetched successfully',
      data: {
        user,
        token,
      },
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.toString(),
    });
  }
};

module.exports.signUp = async (req, res, next) => {
  try {
    await validate(req.body);

    const { body: { email } } = req;

    const userExist = await db.User.findOne({ where: { email }, raw: true });

    if (userExist) {
      return res.json({
        success: false,
        message: `Email Already registered`,
      });
    }

    req.body.password = encrypt(req.body.password.toString());

    const user = await db.User.create(req.body);

    function validate(body) {
      const schema = {
        email: Joi.string().required(),
        password: Joi.string().required(),
        firstName: Joi.string(),
        lastName: Joi.string()
      };
      return Joi.validate(body, schema, {
        abortEarly: true,
        convert: true,
      });
    }

    await createRandomSuggestedProducts(user.id);

    return res.json({
      success: true,
      message: 'User Successfully created',
      data: {
        user
      },
    });
  } catch (e) {
    return next(e);
  }
};
