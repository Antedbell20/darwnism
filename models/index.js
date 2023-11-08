const Animal = require('./Animal');
const User = require('./user'); //WTF?
const Score = require('./Score');

User.hasMany(Score, {
    foreignKey: 'user_id',
});

Score.belongsTo(User, {
    foreignKey: 'user_id',
});

User.belongsTo(Animal, {
    foreignKey: 'rank',
});

module.exports = { Animal, User, Score };  