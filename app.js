const Koa = require('koa')
const mount = require('koa-mount')

const bodyParser = require('koa-bodyparser')
const respond = require('koa-respond')
const graphqlHTTP = require('koa-graphql')
const schema = require('./graphql/schema')

const app = new Koa()

app.use(bodyParser())
app.use(respond())

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

app.on('error', function(err, ctx){
  console.log(err)
  log.error('server error', err, ctx);
})

module.exports = app