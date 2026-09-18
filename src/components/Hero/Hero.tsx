import { useLocation } from "react-router-dom";
import bg from "../../assets/images/bg.jpg";
import overlayBottom from "../../assets/images/overlay-bottom.png";

const Hero = ({ title }: { title: string }) => {
  const location = useLocation();
  return (
    <section>
      <div
        className="bg-no-repeat w-full bg-cover bg-top relative"
        style={{
          backgroundImage: `
      linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${bg})`,
        }}>
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayBottom})`, bottom: "-1px" }}></div>
        <div className="container mx-auto w-full min-h-100 flex flex-col justify-center items-center text-secondary">
          <h2 className="text-4xl font-bold uppercase">{title}</h2>
          <p className="text-sm mt-5 capitalize">
            Home / {location.pathname.replace("/", "")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
