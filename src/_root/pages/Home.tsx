import AboutUs from "@/components/shared/AboutUs"
import Header from "@/components/shared/Header"
import Navbar from "@/components/shared/Navbar"
import Services from "@/components/shared/Services"


const Home = () => {
  return (
    <section className="relative min-h-screen">
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
    </section>
  )
}

export default Home