const Router = require("koa-router");

const nickNameRouter = new Router({prefix: "/api/nickname"});

nickNameRouter.post("/", (ctx, next) => {
  ctx.body = "登录成功"
})

module.exports = nickNameRouter;