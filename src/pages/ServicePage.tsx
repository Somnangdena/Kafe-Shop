import ServiceCard from "../components/ServiceUI/ServiceCard";
import Hero from "../components/UI/Hero";
import Title from "../components/UI/Title";

function ServicePage() {
  return (
    <main>
      <Hero title="Service"/>
      <Title title="Our Service" desc="Fresh & Organic Beans" />
      <ServiceCard/>
    </main>
  )
}

export default ServicePage