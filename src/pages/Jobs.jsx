import FilterSidebar from '../components/FilterSidebar'
import JobCard from '../components/JobCard'
import { useState, useEffect } from 'react'

function Jobs() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // Fetch jobs from a mock API or local JSON
    fetch('/data/jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 flex">
      <FilterSidebar />
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default Jobs