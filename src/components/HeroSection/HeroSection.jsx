import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const jobProfiles = [
    "Full Stack Developer", "Back-end Developer", "Graphic Designer",
    "Senior Accountant", "UI Designer", "Employer Branding Associate",
    "Lead DevOps Engineer", "Front-end Developer", "Data Scientist",
    "Product Manager", "Marketing Specialist", "HR Coordinator"
  ];

  const floatingIcons = [
    { src: "https://cdn-icons-png.flaticon.com/128/2702/2702602.png", alt: "Google", className: "floating-icon icon-1" },
    { src: "https://cdn-icons-png.flaticon.com/128/733/733579.png", alt: "Twitter", className: "floating-icon icon-2" },
    { src: "https://cdn-icons-png.flaticon.com/128/732/732221.png", alt: "Microsoft", className: "floating-icon icon-3" },
    { src: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png", alt: "LinkedIn", className: "floating-icon icon-4" },
    { src: "https://cdn-icons-png.flaticon.com/128/14079/14079391.png", alt: "Amazon", className: "floating-icon icon-5" },
    { src: "https://cdn-icons-png.flaticon.com/128/3670/3670124.png", alt: "Facebook", className: "floating-icon icon-6" }
  ];

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-4 text-center relative">
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
          <Link to="/" className="px-6 py-3 font-semibold flex items-center">
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

        {/* Floating Icons */}
        {floatingIcons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} className={icon.className} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;