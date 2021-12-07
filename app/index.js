const Koa = require("koa");
const app = new Koa();
const useRouter = require('../router/index');

// 连接数据库服务器
require("./db")

app.useRouter = useRouter;

app.useRouter();

module.exports = app;