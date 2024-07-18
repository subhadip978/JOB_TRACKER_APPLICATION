
const express=require('express');
const router=express.Router()
const jobController=require("../controllers/job.controller");
const {verifyToken}=require("../utils/verifyToken")

router.get("/getallJobs",verifyToken,jobController.getAllJobs);
router.post("/createJobs",verifyToken,jobController.saveJobpost);
router.post("/createJobsrequirement",verifyToken,jobController.createJobRequirement);
router.get("/getAllJoblists",verifyToken,jobController.getAllJobLists);
router.post("/searchAllJoblists",verifyToken,jobController.searchJobList);

module.exports=router