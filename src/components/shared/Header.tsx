import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="z-20 overflow-hidden w-full h-screen">
      <img
        src="/assets/images/hero.png"
        alt="hero"
        className="object-cover w-full h-screen top-0 left-0"
      />
      <div className="bg-black/60 absolute top-0 left-0 w-full h-screen" />
      <div className=" top-52 absolute w-full h-full flex flex-col items-center ">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute px-10">
          <h1 className="md:text-6xl text-light-1 text-3xl tracking-tighter font-bold leading-relaxed mb-6 md:mb-4">
            Welcome to Chatter : A Haven for Text-Based Content
          </h1>
          <p className="text-light-2 text-lg mb-6 md:mb-4 font-medium">
            Unleash the Power of words, Connect with Like-minded Readers <br />{" "}
            and Writers
          </p>
          <Button
          className="btn-fill"
          onClick={() => navigate("/auth/sign-un")}
          >Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
