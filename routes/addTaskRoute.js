const express = require('express');
const router = express.Router();
const db = require('../db/models');

const { csrfProtection, asyncHandler } = require('./utils');

//* Where we build the list
router.post('/', asyncHandler(async (req, res) => {
    const { name, description, userId, listId } = req.body;
    const task = await db.Task.build({ name, description, listId, userId });
    await task.save();
    res.redirect('/application')
}));

// router.put('/editTask', asyncHandler(async(req, res) => {
//   const { name, userId, listId, taskId } = req.body;

//   const editTask = await db.Task.findByPk(taskId);

//   //Save is for updating
//   await editTask.update({ name, listId })

//   res.redirect('/application')
// }))

module.exports = router;
