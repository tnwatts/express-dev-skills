var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');


/* GET users listing. */
router.get('/', skillsCtrl.index);
// get /skills  (show form for create a new skill)
router.get('/new', skillsCtrl.new);
// POST /skills (create functionality)
router.post('/', skillsCtrl.create);
// GET /skills/:id/edit (show form for edit)
router.get('/:id/edit', skillsCtrl.edit);
//PUT /skills/:id (update functionality, for doing the edit)
router.put('/:id/', skillsCtrl.update);
//DELETE /skills/:id (delete functionality)
router.delete('/:id', skillsCtrl.delete);
// GET /skills/:id (show individual)
router.get('/:id', skillsCtrl.show);


module.exports = router;

