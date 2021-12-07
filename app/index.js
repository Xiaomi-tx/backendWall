const Koa = require("koa");
const app = new Koa();
const useRouter = require('../router/index')

app.useRouter = useRouter;

app.useRouter();

module.exports = app;