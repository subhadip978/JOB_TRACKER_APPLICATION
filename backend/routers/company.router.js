const express=require('express');

const router=express.router();
const companyController=require("../controllers/company.controller");

router.get("/",companyController);

module.exports=router;