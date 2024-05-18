const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = (() => {
    const seq = new Sequelize("database", "root", "password", {
        host: "********",  // 地址
        dialect: "mysql", // 类型
        port: 3306,  // 端口
        timezone: "+08:00",
        define: {
            timestamps: false, //true表示给模型加上时间戳属性(createAt、updateAt),false表示不带时间戳属性
            freezeTableName: true, //true表示使用给定的表名，false表示模型名后加s作为表名
        }
    });
    return seq
})()
module.exports = sequelize
