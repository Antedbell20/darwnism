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
        const limitedArray = userData.scores.slice(0,10)
        const sortedLimitedArray = limitedArray.sort((a,b)=> b.score - a.score)
        const topPlayerScores = (sortedLimitedArray).map((score) => score.score)
        
        res.render('dashboard', { 
            user, 
            topPlayerScores,
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
        const limitedScoreArray = score.slice(0,10);
        const sortedLimitedScoresArray = limitedScoreArray.sort((a,b)=> b.score - a.score);
        res.render('finalScore', {
            score,
             sortedLimitedScoresArray
        });
});

router.get('/highScore', async (req, res) => {
    try{

        const userData = await Score.findAll({
            
        })
        const score = (userData).map((score) => score.dataValues)
        const limitedScoreArray = score.slice(0,50);
        const sortedLimitedScoresArray = limitedScoreArray.sort((a,b)=> b.score - a.score);
      res.render('highScore', {
        score,
        sortedLimitedScoresArray
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