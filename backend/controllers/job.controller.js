
const Job=require("../models/job");
const {Op}=require("sequelize");

exports.saveJobpost=async(req,res)=>{
	try{
		const { title, company, salary, originaljoburl, appliedDate } = req.body;
        

		const job = await Job.create({
            title,
            company,
            salary,
            originaljoburl,
            appliedDate,
            userId: req.user.id,
        });
		res.status(201).json({
            message: 'Job created successfully!',
            job
        });


	}catch(error){
        console.log(error);
		res.status(500).json({
            message: 'Creating job failed!',
            error: error.message
        });

	}
}




exports.getAllJobs = async (req, res) => {
	const Id=req.user.id ;
    console.log(Id);
    try {
        const jobs = await Job.findAll(
            {where:{userId:Id}}
            );


        res.status(200).json({
            message: 'Jobs fetched successfully!',
            jobs
        });
    } catch (error) {
        res.status(500).json({
            message: 'Fetching jobs failed!',
            error: error.message
        });
    }
};


exports.createJobRequirement=async(req,res)=>{
    try{


        const { title,
            company,
            salary,
            originaljoburl,
            location,
            // posted,
            description
        }=req.body 

        const jobs= await Job.create({
            title,
            company,
            salary,
            originaljoburl,
            location,
          
           description


        })


        res.status(201).json(jobs);



    }catch(err){

        console.log(err);
        res.status(500).json({message:err.message})

    }
}



exports.getAllJobLists=async(req,res)=>{
    try{

      const jobs=  await Job.findAll({
            where:{
                description:{
                    [Op.ne]:null
                }
            }
        })
        res.status(201).json({
            message: 'JobLists fetched successfully!',
            jobs
        });


    }catch(err){
        res.status(500).json({message:err.message})
    }
}


exports.searchJobList=async(req,res)=>{
    try{
        const {search,title}=req.body;
        

        console.log(search);

        const jobsearch=await Job.findAll({where:{

            ...(search &&
                {
                    [Op.or]:[
                
                 {title:{[Op.like]:`%${search}`}},
                 {company:{[Op.like]:`%${search}`}},
                 {location:{[Op.like]:`%${search}`}}
               ] }),


            ...(title && {title:{[Op.like]:`%${title}%`}})


        }})

        res.status(201).json(jobsearch);




    }catch(err){
        console.log(err);
        res.status(500).json({message:err.message})
    }
}


