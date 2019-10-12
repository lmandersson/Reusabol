'use strict';

const router = require('express').Router();
const restoContr = require('./controllers/restos');
const userContr = require('./controllers/users');
const transContr = require('./controllers/transactions');

// User Endpoints
router.post('/user', userContr.createUser);
router.get('/user/:_id', userContr.getUserDetails);
router.delete('/user', userContr.deleteUser);
// router.get('/user/restos', restoContr.getRestos); //FIXME: doesn't work, we used the /admin/restos


// Restaurant Endpoints
router.post('/resto', restoContr.createResto);
router.get('/resto/:restaurantId', restoContr.getRestoDetails);
router.get('/resto/:restaurantId/pendTrans', restoContr.getRestoPendTrans); 
router.delete('/resto', restoContr.deleteResto);

// Transaction Endpoints TODO: delete prevTransaction
router.post('/pendTrans', transContr.createPendTrans);
router.put('/pendTrans/updateNumBols', transContr.updateNumBols);
router.post('/prevTrans', transContr.createPrevTrans);
router.put('/pendTrans/del', transContr.deletePendTrans);
router.put('/inventory', transContr.updateInventory);

// Admin Endpoints
router.get('/admin/users', userContr.getUsers);
router.get('/admin/restos', restoContr.getRestos);
// router.post('/admin/user', userContr.createUser);
// router.post('/admin/resto', restoContr.createResto);
// router.delete('/admin/user', userContr.deleteUser);
// router.delete('/admin/resto', restoContr.deleteResto);

module.exports = router;
