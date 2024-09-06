import { useDispatch, useSelector } from "react-redux";
import Job from "./Job";
import Navbar from "./shared/Navbar";
import { useEffect } from "react";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "./hooks/useGetAllJobs";


const Browse = () => {
    useGetAllJobs();
    const {allJobs} = useSelector(store=>store.job);
    const dispatch = useDispatch();
    useEffect(()=>{
return () => {
    dispatch(setSearchedQuery(""));
}
    },[])
    return (
        <div>
            <Navbar />
            <div className="mx-auto my-10 max-w-7xl">
                <h1 className="my-10 text-xl font-bold">Search Results ({allJobs.length})</h1>
                <div className="grid grid-cols-3 gap-4">
                    {allJobs.map((job) => (
                        <Job key={job._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
