import {Menu, X} from "lucide-react";
import { useState } from "react";
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    <nav className="sticky top-0 z-50 py-3">
        <div className="container px-16 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 font-semibold">
                <span className="text-xl tracking-tight text-primary">Job</span>
                <span className="text-xl tracking-tight text-secondary">hunt</span>
            </div>
            <div className="flex items-center"> 
                <div className="hidden lg:flex justify-center items-center space-x-6 text-xs"> 
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Jobs</a>
                    <a href="#">Services</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="hidden lg:flex justify-center items-center space-x-2 text-xs ml-3">
                    <a href="#" className="py-1.5 px-4 border-purple-700 border rounded-md">Login</a>
                    <a href="#" className="py-1.5 px-4 bg-purple-700 text-background border rounded-md">Register</a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-700 w-full p-12 flex flex-col justify-center items-center lg:hidden">       
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Jobs</a>
                        <a href="#">Services</a>
                        <a href="#">Contact Us</a>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Login
                            </a>
                            <a href="#" className="py-2 px-3 bg-primary text-background border rounded-md">
                                Register
                            </a>
                        </div>
                    </div>
                )}
        </div>
        </div>
    </nav>
  )
}

export default Navbar