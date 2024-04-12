const express = require('express');
const router = express.Router();
const Blog = require('../controllers/blog');

const {check} = require('express-validator');
const Auth = require('../controllers/auth');
const validate = require('../middlewares/validate');
router.route('/').get(Blog.index);

router.post('/create', [
    check('title').not().isEmpty().withMessage('You title is required'),
    check('description').not().isEmpty().withMessage('You description is required')
], validate, Blog.create);

router.put('/update', [
    check('title').not().isEmpty().withMessage('You title is required'),
    check('description').not().isEmpty().withMessage('You description is required')
], validate, Blog.update);

module.exports = router;