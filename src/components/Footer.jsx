function Footer() {
  return (
    <footer className="text-black mt-16 bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-primary">Job<span className="text-secondary">hunt</span></h2>
            <p className="mt-2 text-xs text-gray-500">
              JobHunt offers a great community and a registry of job hiring posts to help both employers and candidates find the right fit.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Complaints</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="mt-2 space-y-1 text-xs text-gray-500">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div>
          <h3 className="font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-1 text-xs text-gray-500">
            <li className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/483/483947.png" alt="Phone Icon" className="w-4 h-4 mr-2" /> 
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/3177/3177361.png" alt="Address Icon" className="w-4 h-4 mr-2" />
              <span>1234 Washington Ave, Manchester, KY 39475</span>
            </li>
          </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} JobHunt. All Rights Reserved.</span>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;