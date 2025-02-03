function StepsSection() {
  const steps = [
    {
      image: 'https://cdn-icons-png.flaticon.com/128/18513/18513186.png',
      title: 'Create an Account',
      description: 'Sign up for the job applicant profile, mention your qualifications, past experiences, and expertise, and scope your interests. Voilà! You’re all set to find your dream jobs.',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/17964/17964676.png',
      title: 'Search Job',
      description: 'Once you set your job hunting parameters, you’ll find many openings related to your career interest on the home page and even filter out some of the best job openings.',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/1091/1091585.png',
      title: 'Upload CV/Resume',
      description: 'From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/Resume and answering a couple of questions, if any.',
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/128/233/233849.png',
      title: 'Get Job',
      description: 'After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods.',
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">Get Hired in <span className="text-purple-600">4 Quick Easy Steps</span></h2>
        <p className="text-sm text-gray-500">The quickest and most effective way to get hired by the top firm working in your <br/> career interest areas.</p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className={`bg-white p-6 rounded-lg shadow-md text-left relative ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}>
            <img 
              src={step.image} 
              alt={step.title + " Icon"} 
              className="w-6 h-6 mb-4 object-contain" 
            />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default StepsSection;