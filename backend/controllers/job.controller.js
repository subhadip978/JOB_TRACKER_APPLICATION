
const Job=require("../models/job");

exports.saveJobpost=async(req,res)=>{
	try{
		const { title, company, salary, originaljoburl, appliedDate } = req.body;

		const job = await Job.create({
            title,
            company,
            salary,
            originaljoburl,
            appliedDate
        });
		res.status(201).json({
            message: 'Job created successfully!',
            job
        });


	}catch(error){
		res.status(500).json({
            message: 'Creating job failed!',
            error: error.message
        });

	}
}




exports.getAllJobs = async (req, res) => {
	const {Id}=req.query.id ;
    try {
        const jobs = await Job.findAll({where:{userId:Id}});
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

