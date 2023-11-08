const router = require('express').Router();
const { Animal } = require('../../models');

router.get('/', async (req, res) => {
   try {
         const animalData = await Animal.findAll(req.body);
         res.status(200).json(animalData);
   } catch (error) {
         res.status(400).json(error);
   }
});

module.exports = router;