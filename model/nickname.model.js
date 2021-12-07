const mongoose = require("../app/db");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// 定义 规则
var kittySchema = mongoose.Schema({
  name: String
});

// 定义 模型
var Kitten = mongoose.model('nickname', kittySchema);


module.exports = Kitten;