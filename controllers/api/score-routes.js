const router = require('express').Router();
const { User, Animal, Score } = require('../../models');

// gets all scores
router.get('/', async (req, res) => {
    try {
          const scoreData = await Score.findAll(req.body);
          res.status(200).json(scoreData);
    } catch (error) {
         console.log(error);
         res.status(400).json(error);
    }
 });

// get a specific score
 router.get('/:id', async (req, res) => {
    try {
        const scoreData = await Score.findByPk(req.params.id, {
        });
        res.status(200).json(scoreData);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

// updates scores
router.put('/:id', async (req, res) => {
    try {
        const userData = await Score.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});


module.exports = router;