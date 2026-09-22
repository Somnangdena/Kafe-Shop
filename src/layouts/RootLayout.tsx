import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Scroll from "./Scroll";
import ScrollToTop from "../components/UI/ScrollToTop";


const RootLayout = () => {


  return (
    <>
      <Scroll/>
      <NavBar/>
      <Outlet/>
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default RootLayout