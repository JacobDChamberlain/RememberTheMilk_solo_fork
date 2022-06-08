const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');
//! csrfProtection only when we need to re-render a page don't dlt for bhavik :(

router.post('/', asyncHandler(async (req, res) => {
    const { name, listId } = req.body;

    const editList = await db.List.findByPk(listId);

    //Save is for updating
    await editList.update({ name })

    res.redirect('/application')
}))


module.exports = router;
