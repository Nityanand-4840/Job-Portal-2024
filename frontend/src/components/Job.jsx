/* eslint-disable react/prop-types */
import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';




const Job = ({job}) => {
  const navigate = useNavigate();
  // const jobId = "dsfjdvjdkvdmlf";

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000 * 60 * 60 * 24))
  }



  return (
    <div className="p-5 bg-white border border-gray-200 rounded-md shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{ daysAgoFunction(job?.createdAt) == 0 ? "Today" : `${ daysAgoFunction(job?.createdAt)} days ago` }</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>

      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-0">
          <Avatar className="bg-transparent">
            <AvatarImage
              src={job?.company?.logo}
              className="bg-transparent"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <h1 className="my-2 text-lg font-bold">{job?.title}</h1>
        <p className="text-sm text-gray-900">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>{job?.position}Position</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>{job?.jobType}</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant={'ghost'}>{job?.salary}LPA</Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={() => navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};
// PropTypes validation
Job.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    jobType: PropTypes.string.isRequired,
    logo:PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired, // Added createdAt validation
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Job;
