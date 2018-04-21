const router = require('koa-router')()

const users = require('./UserController')

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

/**
 * 总路由配置
 */
router.use('/user', users.routes(), users.allowedMethods())

module.exports = router