import AboutContent from "../components/About/AboutContent";
import Hero from "../components/UI/Hero";
import Title from "../components/UI/Title";


function AboutPage() {
  return (
    <main>
      <Hero title="About Us"/>
      <Title title="About Us" desc="Serving Since 1950"/>
      <AboutContent/>
    </main>
  )
}

export default AboutPage