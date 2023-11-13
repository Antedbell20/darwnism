const router = require('express').Router();
const { Score } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const scoreData = await Score.create( {
        score: req.body.score,
        user_id: req.body.user_id,
        });
        
        res.status(200).json(scoreData);
    } catch (error) {
        res.status(400).json(error);
    }

});

module.exports = router;