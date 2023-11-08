const router = require('express').Router()

const userRoutes = require('./user-routes');
// const animalRoutes = require('./animal-routes');
// const scoreRoutes = require('./score-routes');

router.use('/user', userRoutes);
// router.use('/animals', animalRoutes);
// router.use('/scores', scoreRoutes);

module.exports = router;