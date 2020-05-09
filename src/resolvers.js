const resolvers = {
  Query: {
    hello(parent, args, context, info) {
      return 'Hello from GraphQL'
    }
  }
}


module.exports = resolvers