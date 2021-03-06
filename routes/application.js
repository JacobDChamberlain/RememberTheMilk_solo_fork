var express = require('express');
var router = express.Router();
const { requireAuth, logoutUser } = require('../auth')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { Sequelize } = require('../db/models');
// const { Task, List } = require('../db/models')

/* GET application page. */
//? /application by default because of file name

//* Query sends the list on the select field.
router.get('/', requireAuth, asyncHandler(async (req, res) => {
  const userId = req.session.auth.userId;

  //Querries for lists
  const lists = await db.List.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })

  //Queurries for tasks
  const tasks = await db.Task.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })

  res.render('application', { lists, tasks }); //lists, tasks
}));


router.post('/', requireAuth, asyncHandler(async (req, res) => {

  const listId = req.body.listId
  const userId = req.session.auth.userId;
  const listCategoryName = await db.List.findByPk(listId)

  const listTasks = await db.Task.findAll({
    where: { userId, listId },
    order: [['createdAt', 'DESC']]
  })
  const lists = await db.List.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })

  //Queurries for tasks
  const tasks = await db.Task.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })


  res.render('application', { lists, tasks, listTasks, listCategoryName }); //lists, tasks

}));

router.post('/search', requireAuth, asyncHandler(async (req, res) => {

  const userId = req.session.auth.userId;
  let { name } = req.body

  const lists = await db.List.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })

  // Queurries for tasks
  const tasks = await db.Task.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']]
  })


  const searches = await db.Task.findAll({
    where: { userId, name: {
      [Sequelize.Op.iLike]: '%'+name+'%'
    } }
  })



  res.render('application', { lists, tasks, searches }); //lists, tasks

}));



router.get('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/');
})


module.exports = router;
