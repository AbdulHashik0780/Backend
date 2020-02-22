const SuggestedProduct = require('../../db/mongoDB/models/suggestedProducts');

exports.getSuggestedProducts = async (req, res, next) => {
  try {
    const { id: userId } = req.user;

    const products = await SuggestedProduct.findOne({ userId })
      .populate('productId').select('productId').lean()

    return res.json({
      success: true,
      message: 'Suggested Successfully fetched',
      data: {
        products: products.productId,
      },
    });
  } catch (e) {
    return next(e);
  }
};
