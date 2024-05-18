const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const importController = require('./controller/index')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(async (ctx, next) => {
  if (typeof ctx.request.body == "string") {
    ctx.request.body = JSON.parse(ctx.request.body)
  }
  await next()
})
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

importController(app)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
app.listen(8888, () => {
  console.log("启动成功！");
})

module.exports = app
