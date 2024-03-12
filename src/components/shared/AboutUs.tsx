const AboutUs = () => {
  return (
    <div 
    id="about-us"
    className="px-10 pt-24 lg:pt-20 flex justify-between items-center max-lg:flex-col  container gap-20 ">
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-semibold leading-7 mb-10">
          About Chatter
        </h2>
        <p className=" text-lg leading-normal ">
          Chatter is a multi-functional platform where authors and readers can
          have access to their own content. It aims to be a traditional
          bookworm’s heaven and a blog to get access to more text based content.
          Our vision is to foster an inclusive and vibrant community where
          diversity is celebrated. We encourage open-mindedness and respect for
          all individuals, regardless of their backgrounds or beliefs. By
          promoting dialogue and understanding, we strive{" "}
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src="/assets/images/about-us.png"
          alt="about us"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default AboutUs;
