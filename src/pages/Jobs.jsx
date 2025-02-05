import { useState, useEffect } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import SearchInput from '../components/SearchInput';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const jobsPerPage = 9;

  useEffect(() => {
    fetch('/data/jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate indices for current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Calculate total pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

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

        {/* Search Input */}
        <div className="mb-4 flex justify-start">
          <div className="w-[27%]">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search job, company, location, here..."
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 mx-1 border rounded ${
                currentPage === index + 1
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              {index + 1}
            </button>
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