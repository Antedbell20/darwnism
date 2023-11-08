const { Score } = require("../models");

const scoreData = [
    {
        score: 500,
        user_id: 1,
    },
    {
        score: 300,
        user_id: 2,
    },
    {
        score: 300,
        user_id: 3,
    },
    {
        score: 200,
        user_id: 4,
    },
    {
        score: 100,
        user_id: 5,
    },
];

const seedScores = () => Score.bulkCreate(scoreData);

module.exports = seedScores;