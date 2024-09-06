import { useSelector } from "react-redux";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Navbar from "./shared/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    useEffect(()=>{
if(searchedQuery){
    const filteredJobs = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||  
        job.location.toLowerCase().includes(searchedQuery.toLowerCase())      
    })
    setFilterJobs(filteredJobs)
}else{
    setFilterJobs(allJobs)
}
    },[allJobs, searchedQuery]);
    return (
        <div>
            <Navbar />
            <div className="mx-auto mt-5 max-w-7xl">
                <div className="flex gap-5">
                    <div className="w-1/5"> {/* Changed to valid Tailwind class */}
                        <FilterCard />
                    </div>
                    <div className="flex-1 h-[88vh] overflow-y-auto">
                        {
                            filterJobs.length === 0 ? (
                                <span>Job not found.</span>
                            ) : (
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        filterJobs.map((job) => {
                                            return (<motion.div 
                                            initial={{opacity:0, x:100}}
                                            animate={{opacity:1, x:0}}
                                            exit={{opacity:0, x:-100}}
                                            transition={0.3}
                                            key={job?._id}>
                                                <Job job={job} />
                                            </motion.div>)


                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
