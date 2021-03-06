const { makeExecutableSchema } = require("graphql-tools")
const { resolvers } = require("./resolvers")

const typeDefs = `
type Query {
  hello: String
}
`

const schema  = makeExecutableSchema({
  typeDefs,
  resolvers
})


module.exports = schema