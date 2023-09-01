const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String!
        helloArray: [String]
        numberOfAnimals: Int
        price: Float
        isCool: Boolean
        anId: ID
        products: [Product!]!
        product(id: String!): Product
        categories: [Category]!
        category(id: String!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`
module.exports = {
  typeDefs
}
