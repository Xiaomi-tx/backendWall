const Router = require("koa-router");

const nickNameRouter = new Router({prefix: "/api/nickname"});

const nickNameServier = require("../service/nickname.service");

nickNameRouter.post("/", async (ctx, next) => {
  await nickNameServier();
  ctx.body = "登录成功"
})

module.exports = nickNameRouter;