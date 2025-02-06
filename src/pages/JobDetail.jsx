import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

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

  // Icon Mapping
  const iconMapping = {
    positive: "https://cdn-icons-png.flaticon.com/128/8681/8681116.png",
    negative: "https://cdn-icons-png.flaticon.com/128/11144/11144602.png",
  };

  const positiveKeywords = ["friendly", "good", "work from home", "flexible"];
  const negativeKeywords = ["terrible", "slow", "bad", "stressful"];

  const getReviewIcon = (review) => {
    const lowerCaseReview = review.toLowerCase();
    if (positiveKeywords.some((keyword) => lowerCaseReview.includes(keyword))) {
      return iconMapping.positive;
    } else if (
      negativeKeywords.some((keyword) => lowerCaseReview.includes(keyword))
    ) {
      return iconMapping.negative;
    }
    return null;
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[70%] w-full">
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

            <div className="mt-4 lg:mt-0 xl:mr-12">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition">
                Apply Now
              </button>
            </div>
          </div>

          <div className="mt-8 border-b">
            <ul className="flex justify-center sm:justify-start space-x-6">
              <li>
                <button
                  onClick={() => setActiveTab("description")}
                  className={`font-bold px-3 py-2 ${
                    activeTab === "description"
                      ? "text-black border-b-2 border-purple-500"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                >
                  Job Description
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`font-bold px-3 py-2 ${
                    activeTab === "education"
                      ? "text-black border-b-2 border-purple-500"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("totalApplicants")}
                  className={`font-bold px-3 py-2 ${
                    activeTab === "totalApplicants"
                      ? "text-black border-b-2 border-purple-500"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                >
                  Total Applicants
                </button>
              </li>
            </ul>
          </div>

          <div className="mt-4 space-y-2">
            {activeTab === "description" && job.description && (
              <div>
                {job.description.map((point, index) => (
                  <p key={index} className="break-words">
                    {point}
                  </p>
                ))}
              </div>
            )}

            {activeTab === "education" && job.education && (
              <div>
                {job.education.map((degree, index) => (
                  <p key={index} className="break-words">
                    {degree}
                  </p>
                ))}
              </div>
            )}
            {activeTab === "totalApplicants" && job.totalApplicants && (
              <div>
                {job.totalApplicants.map((degree, index) => (
                  <p key={index} className="break-words">
                    {degree}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* right hand side section */}
        <div className="md:w-[30%] w-full mt-8 md:mt-0 md:ml-8">
          <h2 className="text-xl font-bold mb-2">Company Overview</h2>
          <p className="break-words text-gray-700">{job.companyOverview}</p>

          {/* Insights & Perks Section */}
          <div className="mt-6">
            <div className="flex space-x-8 ml-2">
              {job.insights &&
                job.insights.map((insight, index) => {
                  const iconMapping = {
                    "10,000+ employees":
                      "https://cdn-icons-png.flaticon.com/128/3001/3001785.png",
                    "New york, NY":
                      "https://cdn-icons-png.flaticon.com/128/149/149060.png",
                  };

                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={iconMapping[insight]}
                        alt={insight}
                        className="h-6 w-6"
                      />
                      <span className="text-gray-700">{insight}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Reviews Section with Icons */}
          <div className="mt-4">
            <h3 className="font-bold mb-3">Reviews</h3>
            <ul className="list-disc list-inside space-y-3">
              {job.reviews &&
                job.reviews.map((review, index) => (
                  <li key={index} className="flex items-center space-x-5">
                    {getReviewIcon(review) && (
                      <img
                        src={getReviewIcon(review)}
                        alt="Review Icon"
                        className="h-5 w-5"
                      />
                    )}
                    <span className="text-gray-700">{review}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Benefits & Perks Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Benefits & Perks</h3>
            <div className="flex space-x-12 mt-7">
              {job.benefits &&
                job.benefits.map((benefit, index) => {
                  const iconMapping = {
                    Cafeteria:
                      "https://cdn-icons-png.flaticon.com/128/9036/9036423.png",
                    WFH: "https://cdn-icons-png.flaticon.com/128/5024/5024833.png",
                    Transportation:
                      "https://cdn-icons-png.flaticon.com/128/5624/5624759.png",
                  };

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center space-y-2"
                    >
                      <img
                        src={iconMapping[benefit]}
                        alt={benefit}
                        className="h-10 w-10"
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
