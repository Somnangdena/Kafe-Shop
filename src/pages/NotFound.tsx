import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.jpg";
import overlayBottom from "../assets/images/overlay-bottom.png";
function NotFound() {
  const navigate = useNavigate();
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
          <h2 className="text-2xl md:text-4xl font-bold text-center uppercase">
            404 Not Found Page
          </h2>
          <p className="text-sm text-center font-sans mt-4 capitalize">
            <button
              onClick={() => navigate("/")}
              className="bg-primary px-1.5 py-2.5 text-lg font-semibold cursor-pointer">
              Back to Home
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
