const express = require('express');
const {getBootcamp,getBootcamps,updateBootcamp,createBootcamp,deleteBootcamp} = require('../controller/bootcamps')
const router = express.Router();

router.route('/')
.get(getBootcamps)
.post(createBootcamp)

router.route('/:id')
.put(updateBootcamp)
.delete(deleteBootcamp)
.get(getBootcamp)

module.exports=router;