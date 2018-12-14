'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Teachers', [{
      "name": "Ramon Etches",
      "phone": "708-677-6689",
      "subject": "n/a",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Giuseppe Prendiville",
      "phone": "866-645-9227",
      "subject": "Consumer Durables",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Griswold Ridings",
      "phone": "504-271-1354",
      "subject": "n/a",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Eustacia Groundwater",
      "phone": "920-880-7932",
      "subject": "n/a",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Archy Scranedge",
      "phone": "422-654-8487",
      "subject": "Capital Goods",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Susanetta Nowick",
      "phone": "523-986-0298",
      "subject": "Health Care",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Gabie Wraighte",
      "phone": "381-551-0711",
      "subject": "Consumer Services",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Buddy Karolowski",
      "phone": "415-309-9346",
      "subject": "Capital Goods",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Clim Brambill",
      "phone": "531-134-8881",
      "subject": "Health Care",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Judy Benedikt",
      "phone": "764-223-5090",
      "subject": "Finance",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Bartram Brawson",
      "phone": "353-240-0529",
      "subject": "n/a",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Zorina Brimming",
      "phone": "543-368-6151",
      "subject": "Health Care",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Rafaellle Pettwood",
      "phone": "276-900-7681",
      "subject": "Public Utilities",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Shelagh Jarrette",
      "phone": "947-215-9794",
      "subject": "Transportation",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }, {
      "name": "Celestyna Rivilis",
      "phone": "404-562-1834",
      "subject": "n/a",
      "createdAt": new Date(),
      "updatedAt": new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
