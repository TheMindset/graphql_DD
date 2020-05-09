# Graphql Deep Dive

### Resolver arguments

La fonction resolver accepte 4 arguments

```js

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  context: {
    user: "1"
  }
})))


const resolvers = {
  Query: {
    hello(parent, args, context, info) {
      return 'Hello from GraphQL'
    }
  }
}

```

- parent: The object that contains the result returned from the resolver on the parent field.

- args: An object with the arguments passed into the field in the query.

- context: This is an object shared by all resolvers in a particular query. Exemple the current user.

- info: It contains information about the execution state of the query, including the field name, path to the field from the root.

