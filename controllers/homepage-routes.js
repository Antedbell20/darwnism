const router = require('express').Router();

router.get('/', (req, res) => {
    try{
        res.render('homepage');
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/dashboard', (req, res) => {
    try{
        res.render('dashboard');
    }catch(err){
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