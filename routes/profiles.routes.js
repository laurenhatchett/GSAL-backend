const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.profiles.index);
router.post('/', ctrls.profiles.create);
router.delete('/:id', ctrls.profiles.destroy);
router.put('/:id', ctrls.profiles.update );
router.get('/:id', ctrls.profiles.show );
module.exports = router
 