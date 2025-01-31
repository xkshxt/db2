function StepsSection() {
    const steps = [
      {
        icon: '👤',
        title: 'Create an Account',
        description: 'Sign up and set up your profile.',
      },
      {
        icon: '🔍',
        title: 'Search Jobs',
        description: 'Find jobs that match your skills.',
      },
      {
        icon: '📄',
        title: 'Upload Resume',
        description: 'Let employers find you faster.',
      },
      {
        icon: '🎉',
        title: 'Get Hired',
        description: 'Start your dream career.',
      },
    ]
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default StepsSection