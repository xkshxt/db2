function Testimonials() {
    const testimonials = [
      {
        text: "I was just a graduate of computer science from not so well-known university and even didn’t have any internship experience in full-stack development. However, my knowledge in the domain, excitement to learn new things, and the help from the Job Portal for quick job finding gave me a chance to boost my career as a full-stack developer in the rapidly evolving IT industry.",
        name: "Peter Parkinson",
        title: "Full Stack Developer",
        image: "https://via.placeholder.com/50", // Replace with actual image URL
      },
      // Add more testimonials as needed
    ];
  
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-lg text-gray-600">
            Now, let’s know what our career aspirants have to say about our evolving community and career finding services.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            {/* Add navigation arrows if needed */}
            <button className="mr-4">&lt;</button>
            <div className="flex space-x-4">
              {testimonials.map((testimonial, index) => (
                <img
                  key={index}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <button className="ml-4">&gt;</button>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-6">
              <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0l-12 12h24z" />
              </svg>
            </div>
            <p className="mb-4">“{testimonials[0].text}”</p>
            <div className="flex items-center justify-center">
              <span className="font-bold">{testimonials[0].name}</span>
              <span className="ml-2 text-sm">{testimonials[0].title}</span>
            </div>
            <div className="flex justify-center mt-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;