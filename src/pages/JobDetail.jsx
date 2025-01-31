import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function JobDetail() {
  const { id } = useParams()
  const [job, setJob] = useState(null)

  useEffect(() => {
    // Fetch the job by ID
    fetch(`/data/jobs/${id}.json`)
      .then((res) => res.json())
      .then((data) => setJob(data))
  }, [id])

  if (!job) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="flex-grow">
          <div className="mb-6">
            <img src={job.companyLogo} alt={job.companyName} className="h-16 mb-4" />
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-gray-600">{job.companyName} - {job.location}</p>
          </div>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg">Apply Now</button>
          {/* Tabs for Job Description, Education, Total Applicants */}
          <div className="mt-8">
            <div className="border-b">
              <ul className="flex">
                <li className="mr-6"><a href="#description" className="text-purple-600">Job Description</a></li>
                <li className="mr-6"><a href="#education" className="text-gray-600">Education</a></li>
                <li className="mr-6"><a href="#applicants" className="text-gray-600">Total Applicants</a></li>
              </ul>
            </div>
            <div id="description" className="mt-4">
              <h2 className="text-xl font-bold mb-2">Job Description</h2>
              <ul className="list-disc list-inside">
                {job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            {/* Add Education and Total Applicants Sections */}
          </div>
        </div>
        <aside className="w-64 ml-8 hidden md:block">
          {/* Company Overview Sidebar */}
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Company Overview</h2>
            <p>{job.companyOverview}</p>
            {/* Benefits & Perks */}
            <div className="mt-4">
              <h3 className="font-semibold">Benefits & Perks</h3>
              <ul>
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            {/* Employee Reviews */}
          </div>
        </aside>
      </div>
      {/* Recommended Jobs Section */}
    </div>
  )
}

export default JobDetail