import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { AlignJustify, X} from 'lucide-react';
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setIsMenuOpen(prev => !prev)
  }
  return (
    <header className="navbar">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center px-10 py-5 text-base font-semibold gap-10 ">
        <div className="flex-between">
          <Link to="/">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              width={120}
              height={320}
            />
          </Link>
          <div className="block lg:hidden">
          {isMenuOpen ? (
            <X 
              size={40}
              onClick={toggleMenu}
              className="cursor-pointer text-xl"
            />
          ): (
            <AlignJustify
            size={40}
            onClick={toggleMenu}
            className="cursor-pointer text-xl"
            />
          )}
          </div>
        </div>

        <ul className={`flex gap-10 lg:gap-7 lg:flex-row flex-col font-semibold max-md:mt- text-base max-md:hidden ${isMenuOpen ? 'block' : 'hidden'} `}>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

        <div className={`flex lg:flex-row gap-10  lg:gap-7 flex-col max-md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <Button
            className=" border border-primary-blue rounded-md px-5 text-lg "
            onClick={() => navigate("/auth/sign-in")}
          >
            Log in
          </Button>
          <Button
            onClick={() => navigate("/auth/sign-up")}
            className="border border-primary-blue bg-primary-blue rounded-md px-5 text-lg"
          >
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
