const { ApolloServer } = require('apollo-server')

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("db connects"))
  .catch(err => console.error(err))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    let authToken = null
    try {
      authToken = req.headers.authorization
      if (authToken) {
        // find or create user
      }
    } catch (err) {
      console.error(`Unable to authenticate user with token ${authToken}`, err)
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server is listening on ${url}`)
})
