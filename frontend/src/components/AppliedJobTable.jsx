import { useSelector } from "react-redux";
import { Badge } from "./ui/badge";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/table";

const AppliedJobTable = () => {
    const {allAppliedJobs} = useSelector(store=>store.job);
    return (
        <div>
            <Table>
                <TableCaption>A list of your applied Jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Job Role</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead classname="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                       allAppliedJobs.length <= 0 ? <span>You did not applied any job yet.</span> : allAppliedJobs.map((appliedJob)=>(
                            <TableRow key={appliedJob._id}>
<TableCell>{appliedJob?.createdAt?.split("T")[0]}</TableCell>
<TableCell>{appliedJob?.job?.title}</TableCell>
<TableCell>{appliedJob?.job?.company?.name}</TableCell>
<TableCell classname="text-right"><Badge className={`${appliedJob?.status === "rejected" ? 'bg-red-500' :appliedJob.status === 'pending'? 'bg-gray-500' : 'bg-green-400' }`} >{appliedJob.status.toUpperCase()}</Badge></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default AppliedJobTable;
