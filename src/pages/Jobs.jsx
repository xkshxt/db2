import { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('/data/jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex">
      {/* Sidebar for larger screens */}
      <div className="hidden md:block">
        <FilterSidebar />
      </div>

      {/* Job Listings and Mobile Sidebar */}
      <div className="flex-1">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={toggleSidebar}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Filters
          </button>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
          <FilterSidebar isMobile={true} toggleSidebar={toggleSidebar} />
        </>
      )}
    </div>
  );
}

export default Jobs;