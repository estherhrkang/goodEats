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
    return queryInterface.bulkInsert('Ingredients', [
      {name: 'Eggs', measurements: '2', recipeId: 1, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Butter', measurements: '1 tbsp', recipeId: 1, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Bread', measurements: '2 Slices', recipeId: 2, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Cheese', measurements: '2 Slices', recipeId: 2, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Mayonaise', measurements: 'Only a little bit', recipeId: 2, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Kosher Salt (for brine solution)', measurements: 'Half Cup', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Bay Leaves', measurements: '3-4 leaves', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Whole Chicken', measurements: '1', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Beer(lager or ale)', measurements: '1 can', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Vegetable Oil', measurements: 'A few tablespoons', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Granulated Garlic', measurements: '2 tablespoons', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Granulated Onion', measurements: '2 Tablespoons', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Spanish Paprika', measurements: '1 Tablespoon', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Brown Sugar', measurements: '1.5 Tablespoons', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Kosher Salt', measurements: '1.5 Teaspoons', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Fresh Cracked Black Pepper', measurements: '2 teaspoons or to taste', recipeId: 3, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Kosher Salt', measurements: '1.5 Teaspoons', recipeId: 4, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Balsalmic Vinegar', measurements: 'A few glugs', recipeId: 4, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Vegetable Oil', measurements: 'A few tablespoons', recipeId: 4, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Large Zucchini or Summer(Yellow) Squash', measurements: '2', recipeId: 4, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Large Eggplant', measurements: '1', recipeId: 4, createdAt: new Date(), updatedAt: new Date(), },
      {name: 'Large Onion', measurements: '2', recipeId: 4, createdAt: new Date(), updatedAt: new Date(), },

    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Ingredients', null, {});
  }
};
