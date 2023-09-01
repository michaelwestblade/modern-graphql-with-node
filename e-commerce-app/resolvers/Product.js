const {products} = require('../products.json');
const {categories} = require('../categories.json');

module.exports = {
  Product: {
    category: (parent, args, context) => {
      return categories.find(category => category.id == parent.categoryId)
    }
  }
}
