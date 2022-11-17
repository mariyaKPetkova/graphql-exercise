const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hi: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }
  type Mutation {
    addCategory(input:AddCategoryInput!): Category!
    addProduct(input:AddProductInput!): Product!
    deleteCategory(id:ID!):Boolean!
    updateCategory(id:ID!, input:UpdateCategoryInput!): Category!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
  input AddCategoryInput {
    name: String!
  }
  input UpdateCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String!
  }
`;
