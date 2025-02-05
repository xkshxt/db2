import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/jobs.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const foundJob = data.find((job) => job.id === id);
        setJob(foundJob);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching job data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between">
        <div className="flex-grow">
          <div className="flex items-center mb-6">
            {job.companyLogo && (
              <img src={job.companyLogo} alt={job.companyName} className="h-16 mr-4" />
            )}
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <div className="flex space-x-2 mt-2">
                <span className="bg-blue-100 text-blue-600 font-bold px-2 py-1 rounded">{job.positions}</span>
                <span className="bg-orange-100 text-orange-600 font-bold px-2 py-1 rounded">{job.jobType}</span>
                <span className="bg-green-100 text-green-600 font-bold px-2 py-1 rounded">{job.salary}</span>
                <span className="bg-red-100 text-red-600 font-bold px-2 py-1 rounded">WFO</span>
                <span className="bg-green-100 text-green-600 font-bold px-2 py-1 rounded">{job.experience}</span>
              </div>
            </div>
            <button className="ml-auto px-6 py-3 bg-purple-600 text-white rounded-lg">Apply Now</button>
          </div>
          <div className="mt-8">
            <div className="border-b mb-4">
              <ul className="flex">
                <li className="mr-6"><a href="#description" className="text-purple-600">Job Description</a></li>
                <li className="mr-6"><a href="#education" className="text-gray-600">Education</a></li>
                <li className="mr-6"><a href="#applicants" className="text-gray-600">Total Applicants</a></li>
              </ul>
            </div>
            <div id="description" className="mt-4">
              <h2 className="text-xl font-bold mb-2">Job Description</h2>
              <p className="mb-4">
                The LinkedIn team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything.
              </p>
              <ul className="list-disc list-inside">
                {job.description && job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <aside className="w-64 ml-8 hidden md:block">
          <div className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Company Overview</h2>
            <p>{job.companyOverview}</p>
            <div className="mt-4">
              <h3 className="font-semibold">Benefits & Perks</h3>
              <ul>
                {job.benefits && job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <h3 className="font-semibold mt-4">Reviews</h3>
              <ul>
                {job.reviews && job.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default JobDetail;