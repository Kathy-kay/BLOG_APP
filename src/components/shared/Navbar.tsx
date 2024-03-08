import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header className="navbar">
      <div className="flex-between px-10 py-5 text-base font-semibold">
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={120}
            height={320}
          />
        </Link>

        <ul className="flex gap-7 ">
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>

        <div className="flex gap-7 ">
          <Button
          className=" border border-primary-blue rounded-md px-5 font-semibold text-base"
          onClick={() => navigate("/auth/sign-in")}
          >Log in</Button>
          <Button
           onClick={() => navigate("/auth/sign-up")}
          className="btn-fill"
          >Sign up</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
