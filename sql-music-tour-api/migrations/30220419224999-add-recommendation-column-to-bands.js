'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Bands',
      'recommendation',
      { type: Sequelize.STRING}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bands', 'recommendation')
  }
};
