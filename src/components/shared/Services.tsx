

const JoinChatter = () => {
  return (
    <section 
    id="services"
    className="flex flex-col items-center justify-center px-10 lg:py-20 py-24" >
        <h2 className="text-4xl font-semibold leading-relaxed mb-10">Why you should join chatter</h2>
        <p className="text-lg flex items-center justify-start max-w-[1000px] mx-auto">Our goal is to make writers and readers see our platform as 
            their next heaven for blogging, ensuring ease in interactions, 
            connecting with like-minded peers, have access to favorite 
            content based on interests and able to communicate your great 
            ideas with people
        </p>
        <div className="container flex justify-center  flex-wrap gap-10 mt-10">
            <div className="flex-1 sm:w-[250px] sm:min-w-[250px] w-full rounded-[20px] shadow-2xl px-4 py-6 bg-white-900">
                <img src="/assets/images/analytics.png" alt="analytics " width={90} height={90}/>
                <h3 className="font-semibold text-2xl my-2">Analytics</h3>
                <p className="text-sm ">Analytics to track the number of views, likes and comment and 
                    also analyze the performance of your articles over a period of time</p>
            </div>
            <div className="  flex-1 sm:w-[250px] sm:min-w-[250px] w-full rounded-[20px] shadow-2xl px-4 py-6 bg-white-900">
                <img src="/assets/images/social.png" alt="social interactions" width={90} height={90} />
                <h3 className="font-semibold text-2xl my-2">Social interactions</h3>
                <p className="text-sm">Users on the platform can interact with posts they like, 
                comment and engage in discussions</p>
            </div>
            <div className="flex-1 sm:w-[250px] sm:min-w-[250px] w-full rounded-[20px] shadow-2xl px-4 py-6 bg-white-900">
            <img src="/assets/images/content.png" alt="content" width={90} height={90} />
            <h3 className="font-semibold text-2xl my-2">Content creation</h3>
            <p className="text-sm">Write nice and appealing with our in-built markdown, a rich text editor</p>
            </div>
            
        </div>
    </section>
  )
}

export default JoinChatter