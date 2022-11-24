'use strict';
const mockData = require('./stage_mock_data.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('stages', mockData)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('stages', null, {})
  }
};
