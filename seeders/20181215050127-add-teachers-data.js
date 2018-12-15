'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Teachers', [{
      name : 'Arief Saputro',
      phone : '123456789',
      gender : 'male',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Moch. Ali Rokhib',
      phone : '123456789',
      gender : 'male',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Ari Setiawan',
      phone : '123456789',
      gender : 'male',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Herman Saleh',
      phone : '123456789',
      gender : 'male',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Cicik Indahyani',
      phone : '123456789',
      gender : 'female',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Nanik Swiliantie',
      phone : '123456789',
      gender : 'female',
      createdAt : new Date(),
      updatedAt : new Date()
    }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
