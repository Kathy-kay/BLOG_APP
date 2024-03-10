
const AboutUs = () => {
  return (
    <div className="px-10 pt-24 lg:pt-20 flex lg:flex-row flex-col items-start flex-1 gap-20 ">
        <div className="">
            <h2 className="text-3xl font-semibold leading-7 mb-10">About Chatter</h2>
            <p className="leading-relaxed text-[18px]">Chatter is a multi-functional platform where authors 
                and readers can have access to their own content. It aims to be a 
                traditional bookworm’s heaven and a blog to get access to more text based content. 
                Our vision is to foster an inclusive and vibrant community where diversity is celebrated. 
                We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. 
                By promoting dialogue and understanding, we strive </p>
        </div>
        <img src="/assets/images/about-us.png" alt="about us" width={500} height={450} />
    </div>
  )
}

export default AboutUs