const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { v4: uuid } = require("uuid")
const pvuvModule = async () => {
    const model = sequelize.define("sys_pvuvs", {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            defaultValue: uuid().replace(/-/g, "")
        },
        host: {
            type: DataTypes.STRING
        },
        hostname: {
            type: DataTypes.STRING
        },
        protocol: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        origin: {
            type: DataTypes.STRING
        },
        port: {
            type: DataTypes.STRING
        },
        currentPath: {
            type: DataTypes.STRING,
            field: "current_path"
        },
        prePath: {
            type: DataTypes.STRING,
            field: "pre_path"
        },
        requestURL: {
            type: DataTypes.STRING,
            field: "request_url"
        },
        stayTime: {
            type: DataTypes.STRING,
            field: "stay_time"
        },
        createTime: {
            type: 'datetime',
            field: "create_time"
        },
    })

    return model.sync({ force: false });
}

module.exports = pvuvModule

