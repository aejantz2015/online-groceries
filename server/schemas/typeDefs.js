const { gql } = require('apollo-server-express')

const typeDefs = qql`
type Department {
    _id: ID
    name: String
}

type Items {
    _id: ID
    name: string
    description: String
    image: String
    price: Float
    quantity: Ing
    department: Department
}

type Order {
    _id: ID
    purchaseDate: String
    items: Items
}

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: Orders
}
type Cart {
    session: ID
}

type Auth {
    token: ID
    user: User
}

type Query {
    department: Department
    items(category: ID, name: String): Items
    user: User
    order(_id: ID!): Orders
    cart(items: [ID!]): Cart
}

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Orders
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateItems(_id: ID!, quantity: Int!): Item
    login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs