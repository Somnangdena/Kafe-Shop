import { Link, useLocation } from "react-router-dom";
import bg from "../../assets/images/bg.jpg";
import overlayBottom from "../../assets/images/overlay-bottom.png";

const Hero = ({ title }: { title: string }) => {
  const location = useLocation();
  return (
    <section>
      <div
        className="bg-no-repeat w-full bg-cover bg-top relative mb-10"
        style={{
          backgroundImage: `
      linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${bg})`,
        }}>
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayBottom})`, bottom: "-1px" }}></div>
        <div className="container mx-auto w-full min-h-92.5 flex flex-col justify-center items-center text-secondary py-5">
          <h2 className="text-2xl md:text-4xl font-bold text-center uppercase">{title}</h2>
          <p className="text-sm text-center font-sans mt-4 capitalize">
            <Link to={"/"} className="hover:underline">Home</Link> / {location.pathname.replace("/", "")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
