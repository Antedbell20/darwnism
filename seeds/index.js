const seedAnimals = require('./animal-seeds');
const seedUsers = require('./user-seeds');
const seedScores = require('./score-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedAnimals();
    console.log('\n----- ANIMALS SEEDED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedScores();
    console.log('\n----- SCORES SEEDED -----\n');

    process.exit(0);
};

seedAll();