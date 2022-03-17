'use strict';

module.exports = {
  //   email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
    // phone: DataTypes.INTEGER,
    // address: DataTypes.STRING,
    // roleId: DataTypes.STRING,
    // positionId: DataTypes.STRING,
    // image: DataTypes.STRING,
  
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@example.com',
      password: '123456',
      firstName: 'admin',
      lastName: 'boss',
      gender: 0,
      phone: '0987654321',
      address: 'Oulu Oys',
      roleId: 'R1',
      positionId: 'admin',
      image: 'https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804__340.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
