import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { AlignJustify, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="navbar">
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center px-10 py-5  font-semibold gap-20 shadow-md">
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
            ) : (
              <AlignJustify
                size={40}
                onClick={toggleMenu}
                className="cursor-pointer text-xl"
              />
            )}
          </div>
        </div>
        {/* ""flex flex-col lg:flex-row gap-12 lg:gap-12 text-xl" */}
        <ul
          className={`flex flex-col lg:flex-row gap-12 lg:gap-12 text-xl  lg:text-base ${
            isMenuOpen ? 'flex' : 'hidden lg:flex'
          }`}
        >
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>

        <div
          className={`flex  flex-col lg:flex-row gap-12 text-base ${isMenuOpen ? 'flex' : 'hidden lg:flex'}`}
        >
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
