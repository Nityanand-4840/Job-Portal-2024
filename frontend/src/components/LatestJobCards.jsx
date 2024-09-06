import { useNavigate } from "react-router-dom";
import { Badge } from "./ui/badge";
import PropTypes from 'prop-types';

const LatestJobCards = ({job, }) => {
const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/description/${job}`)} className="p-5 bg-white border border-gray-100 rounded-md shadow-xl cursor-pointer">
      <div>
        <h1 className="text-lg font-medium">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="my-2 text-lg font-bold">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>{job?.position}Position</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>{job?.jobType}</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant={'ghost'}>{job?.salary}LPA</Badge>
      </div>
    </div>
  );
};
LatestJobCards.propTypes = {
  job: PropTypes.shape({
    company: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    jobType: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
  }).isRequired,
};

export default LatestJobCards;
