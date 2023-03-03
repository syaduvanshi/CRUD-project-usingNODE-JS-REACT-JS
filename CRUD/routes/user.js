const express = require('express');

const router= express.Router();

const {getuser , createuser , getusers, deleteUser,userUpdate} = require('../Controller/user')

router.get('/users', getuser);
router.post('/user', createuser);
router.get('/user/:id', getusers);
router.delete('/user/:id',deleteUser);
router.put('/user/:id',userUpdate);

module.exports = router;