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
        highlighted: true,
      },
      {
        company: 'Google Inc.',
        location: 'USA',
        title: 'Project Manager',
        description: 'As a project manager, your work will cut across areas of judicious planning, operational excellence, governance...',
        positions: '2 Positions',
        type: 'Full Time',
        salary: '$95,000/Year',
      },
      {
        company: 'LinkedIn',
        location: 'Germany',
        title: 'Full Stack Developer',
        description: 'The ideal candidate will be responsible for conceptualizing and executing clear, quality code to...',
        positions: '10 Positions',
        type: 'Full Time',
        salary: '$85,000/Year',
      },
      {
        company: 'Amazon',
        location: 'USA',
        title: 'Front-end Developer',
        description: 'We are looking for a qualified front-end web developer to join our IT team. You will be responsible for...',
        positions: '20 Positions',
        type: 'Full Time',
        salary: '$110,000/Year',
      },
      {
        company: 'Twitter',
        location: 'USA',
        title: 'ReactJS Developer',
        description: 'We are actively looking for a front-end web developer who is motivated and able to combine...',
        positions: '6 Positions',
        type: 'Full Time',
        salary: '$98,000/Year',
      },
      {
        company: 'Microsoft',
        location: 'USA',
        title: 'Python Developer',
        description: 'We are currently hiring a Python developer to join our product development team to...',
        positions: '5 Positions',
        type: 'Full Time',
        salary: '$90,000/Year',
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-purple-600">Latest and Top</span> Job Openings
          </h2>
          <p className="text-lg text-gray-600">
            Discover the fresh job openings from the giant firms in which you might want to apply and take a chance to get hired by top fortune companies.
          </p>
          <a href="#" className="text-purple-600 font-semibold mt-4 inline-block">View All Jobs</a>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md ${
                job.highlighted ? 'bg-purple-600 text-white' : 'bg-white'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-2">{job.company}</div>
                <div className="text-sm text-gray-400">{job.location}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className={job.highlighted ? 'text-white' : 'text-gray-600'}>{job.description}</p>
              <div className="flex justify-between mt-4">
                <span className={job.highlighted ? 'text-white' : 'text-purple-600'}>{job.positions}</span>
                <span className={job.highlighted ? 'text-white' : 'text-purple-600'}>{job.type}</span>
                <span className={job.highlighted ? 'text-white' : 'text-purple-600'}>{job.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default LatestJobs;