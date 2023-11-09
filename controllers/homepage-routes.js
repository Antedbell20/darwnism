const router = require('express').Router();
const { Animal, Score} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    try{
        res.render('homepage');
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try{
        const scoreData = await Score.findAll({
            // where:{
            //     user_id: req.session.id
            // }
        });

        const score = (scoreData).map((score)=> score.dataValues);

        const rank = 99;

        const animal = "goldfish";

        const username = "username";

        res.render('dashboard', {
            score,
            animal,
            rank,
            username,
            logged_in: req.session.logged_in
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
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/questionPage', (req, res) => {
    try{
        res.render('questionPage');
    }catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;