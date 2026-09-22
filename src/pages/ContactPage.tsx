import ContactList from "../components/Contact/ContactList";
import Hero from "../components/UI/Hero";
import Title from "../components/UI/Title";

function ContactPage() {
  return (
    <main>
      <Hero title="Contact"/>
      <Title title="Contact" desc="Feel Free To Contact" />
      <ContactList/>
    </main>
  )
}

export default ContactPage