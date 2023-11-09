const router = require('express').Router();
const { Animal, Score} = require('../models')

router.get('/', (req, res) => {
    try{
        res.render('homepage');
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/dashboard', async (req, res) => {
    try{
        const scoreData = await Score.findAll({
            // where:{
            //     user_id: req.session.id
            // }
        });

        const score = (scoreData).map((score)=> score.dataValues);

        const rank = 750;

        const animal = "Rat";

        const username = "username";

        res.render('dashboard', {
            score,
            animal,
            rank,
            username,
            loggedIn: req.session.loggedIn
        });
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
});

router.get('/finalScore', (req, res) => {
    try{
        res.render('finalScore');
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/highScore', (req, res) => {
    try{
        res.render('highScore');
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    try{
        res.render('login');
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/questionPage', (req, res) => {
    try{
        res.render('questionPage');
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;