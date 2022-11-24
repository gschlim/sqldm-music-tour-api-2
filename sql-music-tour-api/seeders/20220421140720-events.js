'use strict';
const mockData = require('./event_mock_data.json')

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Events', mockData)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Events', null, {})
  }
};
