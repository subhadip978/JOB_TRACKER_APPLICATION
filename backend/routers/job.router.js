
const express=require('express');
const router=express.Router()
const jobController=require("../controllers/job.controller");

router.get("/allJobs",jobController.getAllJobs);
router.post("/allJobs",jobController.saveJobpost);

module.exports=router