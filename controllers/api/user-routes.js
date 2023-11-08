const router = require('express').Router();
const { User, Animal, Score } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
            console.log(req.body)
        });
        console.log(userData);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {
                    model: Animal,
                    attributes: ['name']
                }
            ]
        });
        res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;