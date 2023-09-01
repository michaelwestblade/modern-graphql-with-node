const {products} = require('../products.json');
const {categories} = require('../categories.json');

module.exports = {
  Query: {
    hello: () => {
      return 'Hello, world';
    },
    helloArray: () => {
      return ['Hello, world'];
    },
    numberOfAnimals: () => {
      return 55;
    },
    price: () => {
      return 3456.7889;
    },
    isCool: () => {
      return false;
    },
    anId: () => {
      return '23';
    },
    products: (parent, args, context) => products,
    product: (parent, args, context) => products.find(product => product.id == args.id),
    categories: (parent, args, context) => categories,
    category: (parent, args, context) => categories.find(category => category.id == args.id)
  }
}
