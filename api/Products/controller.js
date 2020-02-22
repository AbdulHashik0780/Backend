const Products = require('../../db/mongoDB/models/products');
const SuggestedProducts = require('../../db/mongoDB/models/suggestedProducts');

exports.getAll = async (req, res, next) => {
  try {

    const products = await Products.find({}).lean();

    return res.json({
      success: true,
      message: 'Products Successfully fetched',
      data: {
        products,
      },
    });
  } catch (e) {
    return next(e);
  }
};

