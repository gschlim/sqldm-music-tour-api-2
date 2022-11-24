'use strict'
const mockData = require('./band_mock_data.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bands', mockData)
  },

  down: async (queryInterface, Sequelize) => {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('Bands', null, {})
  }
}