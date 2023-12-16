const {DataTypes, Sequelize} = require('sequelize');
const sequelize = require('./../sequelize');

const TASKS_TABLE = "tasks";

const tasksSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    state:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

const tasksModel = sequelize.define(TASKS_TABLE, tasksSchema, { timestamps: false })

module.exports = { TASKS_TABLE, tasksSchema, tasksModel }