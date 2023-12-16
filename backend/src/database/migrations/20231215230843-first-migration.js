'use strict';

const { TASKS_TABLE, tasksSchema } = require('./../models/tasks.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TASKS_TABLE, tasksSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TASKS_TABLE)
  }
};
