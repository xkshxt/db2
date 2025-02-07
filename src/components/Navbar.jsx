import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Optional: for smooth scrolling
    });
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-16 relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0 font-semibold">
            <span className="text-2xl tracking-tight text-primary">Job</span>
            <span className="text-2xl tracking-tight text-secondary">hunt</span>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:flex justify-center items-center space-x-6 text-xs">
              <a href="/" className="hover:font-semibold">Home</a>
              <a href="#" className="hover:font-semibold">About</a>
              <a href="/Jobs" className="hover:font-semibold">Jobs</a>
              <a href="#" className="hover:font-semibold">Services</a>
              <a href="#" onClick={scrollToBottom} className="hover:font-semibold">Contact Us</a>
            </div>
            <div className="hidden lg:flex justify-center items-center space-x-2 text-xs ml-3">
              <a href="#" className="py-2 px-4 border border-purple-700 rounded-md">Login</a>
              <a href="#" className="py-2 px-4 bg-purple-700 text-white border rounded-md">Register</a>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={toggleNavbar} className="p-2">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-20 bg-white w-3/4 h-screen/2 p-6 flex flex-col lg:hidden">
            <button onClick={toggleNavbar} className="self-end mb-4">
              <X />
            </button>
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-lg">Home</a>
              <a href="#" className="text-lg">About</a>
              <a href="#" className="text-lg">Jobs</a>
              <a href="#" className="text-lg">Services</a>
              <a href="#" onClick={scrollToBottom} className="text-lg cursor-pointer">Contact Us</a> {/* Added onClick and cursor-pointer */}
            </nav>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="py-2 px-4 border border-purple-700 rounded-md">Login</a>
              <a href="#" className="py-2 px-4 bg-purple-700 text-white border rounded-md">Register</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;