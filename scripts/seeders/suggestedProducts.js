const Products = require('../../db/mongoDB/models/products');
const SuggestedProduct = require('../../db/mongoDB/models/suggestedProducts');

module.exports.createRandomSuggestedProducts = async (userId) => {
  try {
    const random = Math.floor(Math.random() * 2) + 1;
    const products = await Products.find().skip(random).lean();
    const productIds = products.map(pr => pr._id);

    const insertData = { userId, productId: productIds }
    await SuggestedProduct.insertMany(insertData);
  } catch (e) {
    console.log('error in suggested products create ');
  }
};
