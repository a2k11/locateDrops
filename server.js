const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
require('dotenv').config()
const { findOrCreateUser } = require('./controllers/userController')
const { isNullableType } = require('graphql')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("db connects"))
  .catch(err => console.error(err))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    let authToken = null
    let currentUser = isNullableType
    try {
      authToken = req.headers.authorization
      if (authToken) {
        currentUser = await findOrCreateUser(authToken)
      }
    } catch (err) {
      console.error(`Unable to authenticate user with token ${authToken}`, err)
    }
    return { currentUser }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server is listening on ${url}`)
})
