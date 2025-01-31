function OffersSection() {
    const offers = [
      {
        number: '01',
        title: 'Job Recommendation',
        description: 'Set your job preferences and get countless of your best-fit job recommendations.',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
      },
      {
        number: '02',
        title: 'Create & Build Profile',
        description: 'Build a professional profile to attract top employers.',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
      },
      {
        number: '03',
        title: 'Career Consultation',
        description: 'Get expert advice to advance your career.',
        image: 'https://via.placeholder.com/300x200', // Replace with actual image URL
      },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg text-gray-600">
            Job Portal is the right platform for you to get various job recommendations, get career counseling, and find your ideal job profile.
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="text-center">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-gray-400 mr-2">{offer.number}</span>
                <h3 className="text-xl font-semibold">{offer.title}</h3>
              </div>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default OffersSection;