const router = require('express').Router();
const { Score, User } = require('../models');
const withAuth = require('../utils/auth');

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
                    model: Score,
                    attributes: ['score'], 
                },
            ],
        });

        const user = userData.get({ plain: true });


        res.render('dashboard', { 
            user, 
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/finalScore', async (req, res) => {

        const scoreData = await Score.findAll({
            where:{
                user_id: req.session.user_id
            }
        })
        const score = (scoreData).map((score) => score.dataValues)

        res.render('finalScore', {
             score
        });
});

router.get('/highScore', async (req, res) => {
    try{

        const userData = await Score.findAll({
            
        })
        const score = (userData).map((score) => score.dataValues)
        // console.log(user);
        console.log(score)
      res.render('highScore', {
        score
      });

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
        res.render('questionPage');
});

module.exports = router;