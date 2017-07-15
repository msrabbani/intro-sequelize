'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{
      first_name: 'Muhammad Sayyaf',
      last_name: 'Rabbani',
      email: 'msrabbani@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      jurusan: 'IPA'
    },{
      first_name: 'Ari',
      last_name: 'Wiranta',
      email: 'AriW@yahoo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      jurusan: 'IPS'
    },{
      first_name: 'Adit',
      last_name: 'Miawijoyo',
      email: 'Adithh_miaw@hotmail.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      jurusan: 'Bahasa'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
