function Newsletter() {
    return (
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Get Latest Job Updates</h2>
            <p className="text-lg mb-4">
              Eagerly searching for a job in your interest area? Sign up for the email update to know the latest openings that come under your purview.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-lg w-full md:w-auto"
              />
              <button className="bg-purple-600 text-white p-3 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/150" // Replace with actual image URL
              alt="Newsletter"
              className="w-48 h-auto rounded-full"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Newsletter;