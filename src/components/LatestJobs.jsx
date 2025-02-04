import { Link } from 'react-router-dom';

function LatestJobs() {
  const jobs = [
    {
      company: 'Figma',
      location: 'USA',
      title: 'Senior Product Designer',
      description: 'Your job role would be to work alongside UX researchers, product managers, and fellow product designers...',
      positions: '12 Positions',
      type: 'Full Time',
      salary: '$140,000/Year',
      icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968705.png',
    },
    {
      company: 'Google Inc.',
      location: 'USA',
      title: 'Project Manager',
      description: 'As a project manager, your work will cut across areas of judicious planning, operational excellence, governance...',
      positions: '2 Positions',
      type: 'Full Time',
      salary: '$95,000/Year',
      icon: 'https://cdn-icons-png.flaticon.com/128/281/281764.png',
    },
    {
      company: 'LinkedIn',
      location: 'Germany',
      title: 'Full Stack Developer',
      description: 'The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...',
      positions: '10 Positions',
      type: 'Full Time',
      salary: '$85,000/Year',
      icon: 'https://cdn-icons-png.flaticon.com/128/3536/3536505.png',
    },
    {
      company: 'Amazon',
      location: 'USA',
      title: 'Front-end Developer',
      description: 'We are looking for a qualified front-end web developer to join our IT team. You will be responsible for...',
      positions: '20 Positions',
      type: 'Full Time',
      salary: '$110,000/Year',
      icon: 'https://cdn-icons-png.flaticon.com/128/14079/14079391.png',
    },
    {
      company: 'Twitter',
      location: 'USA',
      title: 'ReactJS Developer',
      description: 'We are actively looking for a front-end web developer who is motivated and able to combine...',
      positions: '6 Positions',
      type: 'Full Time',
      salary: '$98,000/Year',
      icon: 'https://cdn-icons-png.flaticon.com/128/733/733579.png',
    },
    {
      company: 'Microsoft',
      location: 'USA',
      title: 'Python Developer',
      description: 'We are currently hiring a Python developer to join our product development team to...',
      positions: '5 Positions',
      type: 'Full Time',
      salary: '$90,000/Year',
      icon: 'https://cdn-icons-png.flaticon.com/128/732/732221.png',
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="text-purple-600">Latest and Top</span> Job Openings
            </h2>
            <p className="text-sm md:text-base text-gray-500">
              Discover the fresh job openings from the giant firms in which you might want to apply <br className="hidden md:block" />
              and take a chance to get hired by top fortune companies.
            </p>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <Link to="/jobs" className="text-purple-600 font-semibold">View All Jobs</Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="group p-4 md:p-6 rounded-lg shadow-md bg-white hover:bg-purple-600 transition-colors duration-300"
          >
            <div className="mb-4">
              <div className="flex items-center"> 
                <img src={job.icon} alt={`${job.company} icon`} className="w-8 h-8 mr-2" />
                <div className="text-lg md:text-2xl font-bold group-hover:text-white">{job.company}</div>
              </div>
              <div className="text-sm text-gray-400 ml-10 group-hover:text-white"> 
                {job.location}
              </div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-white">{job.title}</h3>
            <p className="text-sm md:text-base mb-4 text-gray-600 group-hover:text-white">{job.description}</p>
            <div className="flex justify-between mt-4">
              <span className="font-bold text-blue-600 group-hover:text-white bg-blue-200 rounded-md px-2 group-hover:bg-purple-600">{job.positions}</span>
              <span className="font-bold text-red-600 group-hover:text-white bg-red-200 rounded-md px-2 group-hover:bg-purple-600">{job.type}</span>
              <span className="font-bold text-green-600 group-hover:text-white bg-green-200 rounded-md px-2 group-hover:bg-purple-600">{job.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestJobs;