const Kitten = require("../model/nickname.model");

const nickNameServier = () => {
  let nickname = new Kitten({name: '小猫猫'})
  nickname.save();
}

module.exports = nickNameServier;