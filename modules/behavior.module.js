const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { v4: uuid } = require("uuid")
const behaviorModule = async () => {
    const model = sequelize.define("sys_behaviors", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: uuid().replace(/-/g, "")
        },
        host: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        hostname: {
            type: DataTypes.STRING
        },
        protocol: {
            type: DataTypes.STRING
        },
        message: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        rank: {
            type: DataTypes.STRING
        },
        origin: {
            type: DataTypes.STRING
        },
        port: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        },
        requestURL: {
            type: DataTypes.STRING,
            field: "request_url"
        },
        createTime: {
            type: 'datetime',
            field: "create_time"
        },
    })

    return model.sync({ force: false });
}

module.exports = behaviorModule

