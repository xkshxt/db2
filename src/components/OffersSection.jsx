function OffersSection() {
  const offers = [
    {
      number: '01',
      title: 'Job Recommendation',
      description: 'Set your job preferences and get countless of your best-fit job recommendations.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', 
    },
    {
      number: '02',
      title: 'Create & Build Profile',
      description: 'Build a professional profile to attract top employers.',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D', 
    },
    {
      number: '03',
      title: 'Career Consultation',
      description: 'Get expert advice to advance your career.',
      image: 'https://plus.unsplash.com/premium_photo-1665990294269-f1d6c35ab9d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnNlbGluZ3xlbnwwfHwwfHx8MA%3D%3D', 
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-4xl font-extrabold mb-4">What We Offer</h2>
        <p className="text-sm text-gray-500">
          Job Portal is the right platform for you to get various job recommendations, get career <br/> counseling, and find your ideal job profile.
        </p>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div key={index} className="text-left">
            <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <div className="flex items-center mb-2">
              <span className="text-3xl font-bold text-gray-400 mr-4">{offer.number}</span>
              <div className="border-l-2 border-gray-300 pl-4">
                <h3 className="text-xl font-semibold">{offer.title}</h3>
                <p className="text-xs text-gray-600">{offer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OffersSection;