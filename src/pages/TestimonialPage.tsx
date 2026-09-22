import TestimonialList from "../components/Testimonial/TestimonialList";
import Hero from "../components/UI/Hero";
import Title from "../components/UI/Title";

function TestimonialPage() {
  return (
    <main>
      <Hero title="Testimonial"/>
      <Title title="Testimonial" desc="Our Clients Say"/>
      <TestimonialList/>
    </main>
  )
}

export default TestimonialPage