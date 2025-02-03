function CareerOptions() {
  const categories = [
    { icon: '🎨', title: 'Design', openings: '200+ job openings' },
    { icon: '📈', title: 'Sales', openings: '350+ job openings' },
    { icon: '📣', title: 'Marketing', openings: '500+ job openings' },
    { icon: '💼', title: 'Finance', openings: '200+ job openings' },
    { icon: '🚗', title: 'Automobile', openings: '250+ job openings' },
    { icon: '🚚', title: 'Logistics/Delivery', openings: '1k+ job openings' },
    { icon: '🗂️', title: 'Admin', openings: '100+ job openings' },
    { icon: '🏗️', title: 'Construction', openings: '500+ job openings' },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4">
          <span className="text-purple-600">Countless Career Options</span> Are Waiting <br/> For You To Explore
        </h2>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-colors duration-300 hover:bg-purple-600 hover:text-white ${
              category.highlighted ? 'bg-purple-600 text-white' : 'bg-white text-gray-600'
            }`}
          >
            <div className="text-left">
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-extrabold mb-2">{category.title}</h3>
              <p>{category.openings}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg">View All Categories</button>
      </div>
    </section>
  );
}

export default CareerOptions;