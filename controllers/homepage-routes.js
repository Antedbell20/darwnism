const router = require('express').Router();
const { Animal, Score, User } = require('../models');
const withAuth = require('../utils/auth');
const { questionObjArray }= require('../public/js/questions')
// const questionObjArray = localStorage.getItem("questionObjArray");

router.get('/', (req, res) => {
    try{
        res.render('homepage', {
            logged_in: req.session.logged_in,
        });
    }catch(err){
        res.status(500).json(err)
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findOne({
            where: { id: req.session.user_id },
            include: [
                {
                    // will need to refactor this possible to have score and animal in the same table?
                    // or link animal to score or score to animal
                    // this is the data we get back from the query
                    // {
                    //     id: 8,
                    //     username: 'sam',
                    //     password: '$2b$10$B//J6gWAAjBG9CE3jntv1.VZ5AbX5ejAa/nocxgRPRv2k6noyni.S',
                    //     rank: 3,
                    //     scores: [],
                    //     animal: { name: 'Rat' }
                    //   }


                    model: Score,
                    attributes: ['score'], 
                },
                {
                    model: Animal,
                    as: 'animal', 
                    attributes: ['name'], 
                },
            ],
        });

        const user = userData.get({ plain: true });
        console.log(user);

        res.render('dashboard', { 
            user, 
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
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

    // try{
        res.render('questionPage',{
         questionObjArray,
        });
    // }catch(err){
    //     res.status(500).json(err)
    // }
});

router.post('/questionPage', (req, res) => {
    try{
        const questionObjArray = req.body.questionObjArray;

        console.log(req.body.questionObjArray);
        res.render('questionPage',{
            questionObjArray
        });
    }catch(err){
        res.status(500).json(err)
    }
});





// export questionObjArray either from localstorage or directly from some file to then render it within questionPage for further use.

module.exports = router;