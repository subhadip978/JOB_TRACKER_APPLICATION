
const express=require('express');
const router=express.Router()
const jobController=require("../controllers/job.controller");
const {verifyToken}=require("../utils/verifyToken")

router.get("/getallJobs",verifyToken,jobController.getAllJobs);
router.post("/createJobs",verifyToken,jobController.saveJobpost);

module.exports=router