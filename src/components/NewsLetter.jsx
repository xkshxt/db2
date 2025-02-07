function Newsletter() {
    return (
      <section className="mt-20 py-10 bg-gray-700 w-2/3 mx-auto text-white rounded-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between lg:ml-10">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Latest Job Updates</h2>
            <p className="text-lg mb-4">
              Eagerly searching for a job in your interest area? Sign up for the email update to know the latest openings that come under your purview.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-l-lg w-full md:w-auto text-black"
              />
              <button className="bg-purple-600 text-white p-3 rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1679768606018-7ac0b7583957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c2xldHRlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Newsletter"
              className="w-48 h-auto rounded-full"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Newsletter;