const express = require('express');
const { check, validationResult } = require('express-validator');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');

const router = express.Router();

const listValidators = [
    check("name")
        .exists({ checkFalsy: true })
        .withMessage("Please enter a name for your list.")
        .isLength({ max: 50 })
        .withMessage("List names must not be longer than 50 characters.")
];

//* Where we build the list
router.post('/', listValidators, asyncHandler(async (req, res) => {
    const { name, userId } = req.body;
    const list = await db.List.build({ name, userId });
    await list.save();
    res.redirect('/application')
}));


module.exports = router;
