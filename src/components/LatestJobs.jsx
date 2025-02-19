import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function LatestJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Truncate text to a specific character limit
  const truncateText = (text, limit) => {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  useEffect(() => {
    fetch('/data/jobs.json')
      .then((response) => response.json())
      .then((data) => {
        const latestJobs = data.slice(-6); // Get the last 6 jobs
        setJobs(latestJobs);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Loading latest jobs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="text-purple-600">Latest and Top</span> Job Openings
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Discover the fresh job openings from the giant firms in which you might want to apply{' '}
              <br className="hidden md:block" />
              and take a chance to get hired by top fortune companies.
            </p>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <a href="/jobs" className="text-purple-600 font-semibold">
              View All Jobs
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => {
          // Get the job description and truncate it
          const descriptionText = Array.isArray(job.description)
            ? job.description[0]
            : job.description;
          const truncatedDescription = truncateText(descriptionText, 100);

          return (
            <Link
              to={`/jobs/${job.id}`}
              key={job.id}
              className="group p-4 md:p-6 rounded-lg shadow-md bg-white hover:bg-purple-600 transition-colors duration-300"
            >
              <div className="mb-4">
                <div className="flex items-center">
                  <img
                    src={job.companyLogo}
                    alt={`${job.companyName} logo`}
                    className="w-8 h-8 mr-2"
                  />
                  <div className="text-lg md:text-2xl font-bold group-hover:text-white">
                    {job.companyName}
                  </div>
                </div>
                <div className="text-sm text-gray-400 ml-10 group-hover:text-white">
                  {job.location}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-white">
                {job.title}
              </h3>
              <p className="text-sm md:text-base mb-4 text-gray-600 group-hover:text-white">
                {truncatedDescription}
              </p>
              <div className="flex justify-between mt-4">
                <span className="font-bold text-blue-600 group-hover:text-white bg-blue-200 rounded-md px-2 group-hover:bg-purple-600">
                  {job.positions}
                </span>
                <span className="font-bold text-red-600 group-hover:text-white bg-red-200 rounded-md px-2 group-hover:bg-purple-600">
                  {job.type || job.jobType}
                </span>
                <span className="font-bold text-green-600 group-hover:text-white bg-green-200 rounded-md px-2 group-hover:bg-purple-600">
                  {job.salary}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default LatestJobs;