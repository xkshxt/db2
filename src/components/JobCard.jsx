import { Link } from 'react-router-dom'

function JobCard({ job }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <img src={job.companyLogo} alt={job.companyName} className="h-12 mb-4" />
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-600">{job.companyName}</p>
      <p className="text-gray-600">{job.location}</p>
      <div className="mt-4">
        <span className="text-purple-600 font-bold">{job.salary}</span>
      </div>
      <div className="mt-4 flex space-x-2">
        <Link to={`/jobs/${job.id}`} className="flex-1 px-4 py-2 bg-purple-600 text-white text-center rounded-lg">Apply Now</Link>
        <Link to={`/jobs/${job.id}`} className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 text-center rounded-lg">View Details</Link>
      </div>
    </div>
  )
}

export default JobCard