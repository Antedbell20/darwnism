const { Animal } = require('../models');

animalData = [
    {
        name: 'Dolphin',
    },
    {
        name: 'Tiger',
    },
    {
        name: 'Rat',
    },
    {
        name: 'House Cat',
    },
    {
        name: 'Goldfish',
    },
];

const seedCategories = () => Animal.bulkCreate(animalData);

module.exports = seedCategories;