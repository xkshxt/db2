import { useState, useEffect, useCallback } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import SearchInput from '../components/SearchInput';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    companyTypes: [],
    locations: [],
    industries: [],
    salaries: [],
    experiences: [],
  });
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

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  }, []);


  const filteredJobs = jobs.filter((job) => {
    // Search term filtering
    const matchesSearchTerm =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Company Type filtering
    const matchesCompanyType =
      filters.companyTypes.length === 0 || filters.companyTypes.includes(job.companyType);

    // Location filtering
    const matchesLocation =
      filters.locations.length === 0 || filters.locations.includes(job.location);

    // Industry filtering
    const matchesIndustry =
      filters.industries.length === 0 || filters.industries.includes(job.industry);

    // Salary filtering
    const matchesSalary =
      filters.salaries.length === 0 || filters.salaries.includes(job.salaryRange);

    // Experience filtering
    const matchesExperience =
      filters.experiences.length === 0 || filters.experiences.includes(job.experience);

    // Combine all filters
    return (
      matchesSearchTerm &&
      matchesCompanyType &&
      matchesLocation &&
      matchesIndustry &&
      matchesSalary &&
      matchesExperience
    );
  });

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
        <FilterSidebar onFilterChange={handleFilterChange} />
      </div>

      {/* Job Listings and Mobile Sidebar */}
      <div className="flex-1">
        {/* Mobile Filter Button */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <div className="w-[70%]">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search job, company, location here..."
            />
          </div>
          <button
            onClick={toggleSidebar}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Filters
          </button>
        </div>

        {/* Search Input for larger screens */}
        <div className="mb-4 md:block hidden">
          <div className="w-[27%]">
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search job, company, location here..."
            />
          </div>
        </div>

        {/* Job Listings */}
        {currentJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-8">
            No jobs found matching your criteria.
          </div>
        )}

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
          <FilterSidebar
            isMobile={true}
            toggleSidebar={toggleSidebar}
            onFilterChange={handleFilterChange}
          />
        </>
      )}
    </div>
  );
}

export default Jobs;