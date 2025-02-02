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
      <p className="text-xs text-red-500 font-semibold mb-4 flex items-center justify-center">
      <img 
        src="https://cdn-icons-png.flaticon.com/128/1086/1086474.png" 
        alt="Trophy Icon" 
        className="w-4 h-4 mr-2" 
      />
      No. 1 Job hunt website.
      </p>
        <h1 className="text-5xl font-extrabold">Search,Apply & <br/> Get Your
          <span className='text-primary'> Dream Job</span></h1>
        <br/>
        <p className="text-sm text-gray-500">Start your hunt for the best, life-changing career opportunities from here in your <br/> selected areas conveniently and get hired quickly.</p>
        <br/>
        <div className="flex items-center justify-center space-x-4">
        <Link to="/jobs" className="px-6 py-3 bg-purple-600 text-white rounded-lg -mr-1">Browse Jobs</Link>
        <Link to="/post-job" className="px-6 py-3 font-semibold flex items-center">
          <img 
            src="https://cdn-icons-png.flaticon.com/128/7187/7187472.png" 
            alt="Info Icon" 
            className="w-8 h-8 mr-2"
          />
          How it works?
        </Link>
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