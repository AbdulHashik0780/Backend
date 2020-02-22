require('../../db/mongoDB');
const Product = require('../../db/mongoDB/models/products');

const bulkInsertData = [
  {
    name: 'Product 1',
    price: 15,
    imageUrl: 'airplane.png'
  },
  {
    name: 'Product 2',
    price: 20,
    imageUrl: 'arctichare.png'
  },
  {
    name: 'Product 3',
    price: 25,
    imageUrl: 'baboon.png'
  },
  {
    name: 'Product 4',
    price: 35,
    imageUrl: 'boat.png'
  },
  {
    name: 'Product 5',
    price: 40,
    imageUrl: 'monarch.png'
  }
];

(async() => {
  try {
    const products = await Product.find({});
    if(products.length) {
      throw Error('Data Already Seeded');
    }
    await Product.insertMany(bulkInsertData);
    console.log('Data Successfully Seeded');
    process.exit(0);
  } catch(e) {
    throw Error(e);
  }
})();
