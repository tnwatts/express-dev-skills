var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');

/* GET users listing. */
router.get('/', skillsCtrl.index);
// get /skills   create a new skill
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// router.get('/skills/')

module.exports = router;

