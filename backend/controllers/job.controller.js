
const Job=require("../models/job");

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
            // posted,
            description
        }=req.body 

        const jobs= await Job.create({
            title,
            company,
            salary,
            originaljoburl,
          
           description


        })


        res.status(201).json(jobs);



    }catch(err){

        console.log(err);
        res.status(500).json({message:err.message})

    }
}


