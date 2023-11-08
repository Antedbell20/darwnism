const { User } = require('../models');

const userData = [
    {
        username: 'testuser1',
        password: 'password1',
        rank: 1,
    },
    {
        username: 'testuser2',
        password: 'password2',
        rank: 2,
    },
    {
        username: 'testuser3',
        password: 'password3',
        rank: 3,
    },
    {
        username:'testuser4',
        password: 'password4',
        rank: 4,
    },
    {
        username: 'testuser5',
        password: 'password5',
        rank: 5,
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;