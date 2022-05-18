import Jobs from "./Jobs";
import { Job, data } from "../types/interfaces";
import "../styles/allstlye.css"

interface DisplayJobProps {
  jobs:data
  search: string
}

const DisplayJobs = ({ jobs, search }: DisplayJobProps) => {
  return (
    <>
      <div className="JobsWrapper">
        {search ? (
          <p>
            Search results: <span>{search}</span>
          </p>
        ) : (
          <p>
            Search results: <span> company</span>
          </p>
        )}

        {jobs.data.map((job) => (
          <Jobs key={job._id} job={job} />
        ))}
      </div>
    </>
  );
};

export default DisplayJobs;
