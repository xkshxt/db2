import { Link } from 'react-router-dom';
import './HeroSection.css'; // Import the CSS file

function HeroSection() {
  const jobProfiles = [
    "Full Stack Developer", "Back-end Developer", "Graphic Designer",
    "Senior Accountant", "UI Designer", "Employer Branding Associate",
    "Lead DevOps Engineer", "Front-end Developer", "Data Scientist",
    "Product Manager", "Marketing Specialist", "HR Coordinator"
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xl mb-8">No. 1 Job hunt website.</p>
        <h1 className="text-5xl font-extrabold mb-4">Search, Apply & Get Your Dream Job</h1>
        <br/>
        <p className="text-sm mb-8">Start your hunt for the best, life-changing career opportunities from here in your selected areas conveniently and get hired quickly.</p>
        <br/>
        <div>
          <Link to="/jobs" className="px-6 py-3 bg-purple-600 text-white rounded-lg mr-4">Browse Jobs</Link>
          <Link to="/post-job" className="px-6 py-3 bg-white text-purple-600 border border-white rounded-lg">Post a Job</Link>
        </div>

        <br/>
        <br/>
        
        <div className="job-profiles mt-8">
          <div className="job-row left-to-right">
            {[...jobProfiles, ...jobProfiles].map((job, index) => (
              <button key={index} className="job-button">{job}</button>
            ))}
          </div>
          <div className="job-row right-to-left">
            {[...jobProfiles, ...jobProfiles].map((job, index) => (
              <button key={index} className="job-button">{job}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;