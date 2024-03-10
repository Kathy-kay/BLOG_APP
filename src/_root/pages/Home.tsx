import AboutUs from "@/components/shared/AboutUs"
import Header from "@/components/shared/Header"
import Navbar from "@/components/shared/Navbar"


const Home = () => {
  return (
    <section className="relative min-h-screen">
      <Navbar />
      <Header />
      <AboutUs />
    </section>
  )
}

export default Home