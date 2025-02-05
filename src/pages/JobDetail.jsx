import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const foundJob = data.find((job) => job.id === id);
        setJob(foundJob);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-6">Loading...</div>;
  }

  if (!job) {
    return <div className="text-center py-6">Job not found</div>;
  }

  return (
    <div className="container mx-auto px-4 md:px-12 py-12">
      <div className="flex flex-col md:flex-row">
        {/* Left Section: Job Details */}
        <div className="md:w-2/3 w-full">
          {/* Job Title & Apply Button */}
          <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full mb-6">
            <div className="flex items-center">
              {job.companyLogo && (
                <img
                  src={job.companyLogo}
                  alt={job.companyName}
                  className="h-12 sm:h-16 mr-4"
                />
              )}
              <div className="ml-5 text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold">{job.title}</h1>
                <div className="text-xs flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
                  <span className="bg-blue-100 text-blue-600 font-bold px-3 py-1 rounded">
                    {job.positions}
                  </span>
                  <span className="bg-orange-100 text-orange-600 font-bold px-3 py-1 rounded">
                    {job.jobType}
                  </span>
                  <span className="bg-green-100 text-green-600 font-bold px-3 py-1 rounded">
                    {job.salary}
                  </span>
                  <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded">
                    WFO
                  </span>
                  <span className="bg-green-100 text-green-600 font-bold px-3 py-1 rounded">
                    {job.experience}
                  </span>
                </div>
              </div>
            </div>

            {/* Apply Now Button (stays in line on lg screens) */}
            <div className="mt-4 lg:mt-0">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
                Apply Now
              </button>
            </div>
          </div>

          {/* Job Details Tabs */}
          <div className="mt-8 border-b">
            <ul className="flex justify-center sm:justify-start space-x-6">
              <li>
                <a href="#description" className="text-purple-600 font-medium">
                  Job Description
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-600 font-medium">
                  Education
                </a>
              </li>
              <li>
                <a href="#applicants" className="text-gray-600 font-medium">
                  Total Applicants
                </a>
              </li>
            </ul>
          </div>

          {/* Job Description Content */}
          <div id="description" className="mt-4 space-y-2">
            {job.description &&
              job.description.map((point, index) => (
                <p key={index} className="break-words">
                  {point}
                </p>
              ))}
          </div>
        </div>

        {/* Right Section: Company Overview */}
        <div className="md:w-1/3 w-full mt-8 md:mt-0 md:ml-8">
          <div className="p-4 ">
            <h2 className="text-xl font-bold mb-2">Company Overview</h2>
            <p className="break-words">{job.companyOverview}</p>

            {/* Reviews */}
            <div className="mt-4">
              <h3 className="font-semibold">Reviews</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.reviews &&
                  job.reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                  ))}
              </ul>
            </div>

            {/* Benefits & Perks */}
            <div className="mt-4">
              <h3 className="font-semibold">Benefits & Perks</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.benefits &&
                  job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
