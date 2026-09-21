import MenuList from "../components/Menu/MenuList";
import Hero from "../components/UI/Hero";
import Title from "../components/UI/Title";

function MenuPage() {
  return (
    <main>
      <Hero title="Menu"/>
      <Title title="Menu & Price" desc="Competitive Pricing" />
      <MenuList/>
    </main>
  )
}

export default MenuPage