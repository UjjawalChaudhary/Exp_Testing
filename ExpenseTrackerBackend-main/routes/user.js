// const express = require('express');

// const userController = require('../controller/user');

// const router = express.Router();


// router.post('/signup', userController.signup);

// router.post('/login', userController.login)

// module.exports = router;


const express = require('express');

const userController = require('../controller/user');
const expenseController = require('../controller/expense')

const authenticatemiddleware = require('../middleware/auth');

const router = express.Router();


router.post('/signup', userController.signup);

router.post('/login', userController.login)

router.post('/addexpense', authenticatemiddleware.authenticate, expenseController.addexpense )

router.get('/download', authenticatemiddleware.authenticate, userController.download)

router.get('/getexpenses', authenticatemiddleware.authenticate, expenseController.getexpenses )

//router.delete('/deleteexpense/:expenseid', authenticatemiddleware.authenticate, expenseController.deleteexpense)

module.exports = router; 