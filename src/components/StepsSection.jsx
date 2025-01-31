function StepsSection() {
  const steps = [
    {
      icon: '👤',
      title: 'Create an Account',
      description: 'Sign up for the job applicant profile, mention your qualifications, past experiences, and expertise, and scope your interests. Voilà! You’re all set to find your dream jobs.',
    },
    {
      icon: '🔍',
      title: 'Search Job',
      description: 'Once you set your job hunting parameters, you’ll find many openings related to your career interest on the home page and even filter out some of the best job openings.',
    },
    {
      icon: '📄',
      title: 'Upload CV/Resume',
      description: 'From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/Resume and answering a couple of questions, if any.',
    },
    {
      icon: '🎉',
      title: 'Get Job',
      description: 'After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get Hired in <span className="text-purple-600">4 Quick Easy Steps</span></h2>
        <p className="text-lg text-gray-600">The quickest and most effective way to get hired by the top firm working in your career interest areas.</p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;