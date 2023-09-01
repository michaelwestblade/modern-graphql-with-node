const {categories} = require('../categories.json');

module.exports = {
  Category: {
    products: (parent, args, context) => {
      return products.filter(product => product.categoryId == parent.id)
    }
  }
}
