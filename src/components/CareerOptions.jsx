function CareerOptions() {
    const categories = [
      { icon: '🎨', title: 'Design', openings: '200+ job openings' },
      { icon: '📈', title: 'Sales', openings: '350+ job openings', highlighted: true },
      { icon: '📣', title: 'Marketing', openings: '500+ job openings' },
      { icon: '💼', title: 'Finance', openings: '200+ job openings' },
      { icon: '🚗', title: 'Automobile', openings: '250+ job openings' },
      { icon: '🚚', title: 'Logistics/Delivery', openings: '1k+ job openings' },
      { icon: '🗂️', title: 'Admin', openings: '100+ job openings' },
      { icon: '🏗️', title: 'Construction', openings: '500+ job openings' },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Countless <span className="text-purple-600">Career Options</span> Are Waiting
          </h2>
          <p className="text-lg text-gray-600">For You to Explore</p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md text-center ${
                category.highlighted ? 'bg-purple-600 text-white' : 'bg-white'
              }`}
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className={category.highlighted ? 'text-white' : 'text-gray-600'}>{category.openings}</p>
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