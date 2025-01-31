function Footer() {
    return (
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">JobFinder</h2>
              <p className="mt-2">Connecting talent with opportunity.</p>
            </div>
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4">
            &copy; {new Date().getFullYear()} JobFinder. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer