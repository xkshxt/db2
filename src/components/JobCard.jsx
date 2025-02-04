import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 relative">
      <div className="flex items-center mb-4">
        <img src={job.companyLogo} alt={job.companyName} className="w-10 h-10 mr-5" />
        <div>
          <h3 className="text-lg font-extrabold">{job.companyName}</h3>
          <p className="text-sm text-gray-500">{job.location}</p>
        </div>
        <button className="absolute top-4 right-4 text-black hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
        </button>
      </div>
      <h4 className="text-lg font-extrabold mb-2">{job.title}</h4>
      <p className="text-sm text-gray-600 mb-4">{job.description[0]}</p>
      <div className="flex gap-2 items-center mb-4">
        <span className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded">2 Positions</span>
        <span className="bg-orange-100 text-orange-600 font-bold px-2 py-1 rounded">Full Time</span>
        <span className="bg-green-100 text-green-600 font-bold px-2 py-1 rounded">2 Years</span>
      </div>
      <div className="flex gap-2 items-center mb-4">
        <span className="bg-green-100 text-green-300 font-bold px-2 py-1 rounded">{job.salary}</span>
        <span className="bg-red-100 text-red-600 font-bold px-2 py-1 rounded">WFO</span>
      </div>
      <div className="flex gap-2">
        <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Apply Now</button>
        <Link to={`/jobs/${job.id}`} className="border border-black text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
          View Details
        </Link>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    salary: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;