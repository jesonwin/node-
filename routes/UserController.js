const router = require('koa-router')()
const userService = require('./../services/UserService')

//router.prefix('/user')

router.get('/list', async (ctx, next) => {
  let result = await userService.list()
  ctx.body = result
})


module.exports = router

