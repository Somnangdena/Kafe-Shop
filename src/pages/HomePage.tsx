import AboutContent from "../components/About/AboutContent";
import Offer from "../components/Home/Offer";
import Slider from "../components/Home/Slider";
import MenuList from "../components/Menu/MenuList";
import Booking from "../components/Reservation/Booking";
import ServiceCard from "../components/ServiceUI/ServiceCard";
import TestimonialList from "../components/Testimonial/TestimonialList";
import Title from "../components/UI/Title";

function HomePage() {
  return (
    <main>
      <Slider/>
      <Title title="About Us" desc="Serving Since 1950"/>
      <AboutContent/>
      <Title title="Our Service" desc="Fresh & Organic Beans" />
      <ServiceCard/>
      <Offer/>
      <Title title="Menu & Price" desc="Competitive Pricing" />
      <MenuList/>
      <Booking/>
      <Title title="Testimonial" desc="Our Clients Say"/>
      <TestimonialList/>
    </main>
  )
}

export default HomePage