import overlayTop from "../../assets/images/overlay-top.png";
import overlayBottom from "../../assets/images/overlay-bottom.png";
import bg from "../../assets/images/bg.jpg";

const Offer = () => {
  return (
    <section className="mt-10">
      <div
        className="bg-no-repeat w-full bg-cover bg-top relative p-10"
        style={{
          backgroundImage: `
      linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${bg})`,
        }}>
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayTop})`, top: "-1px" }}></div>
        <div className="container mx-auto flex flex-col h-full text-white justify-center items-center py-10">
          <h2 className="text-primary font-bold text-4xl pb-2">50% OFF</h2>
          <h3 className="text-secondary font-bold text-3xl text-center">
            Sunday Special Offer
          </h3>
          <p className="text-sm py-4 text-center">
           Only for Sunday from 1st Jan to 30th Jan 2045
          </p>
          <div className="flex flex-wrap mt-4">
              <input
                className="bg-secondary text-accent  w-full min-w-25 flex-1 px-5 py-2 overflow-hidden "
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your Email"
              />
              <button className="bg-primary/90 text-accent font-semibold py-2 px-4 text-lg cursor-pointer hover:bg-primary">
                Sign Up
              </button>
            </div>
        </div>
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayBottom})`, bottom: "-1px" }}></div>
      </div>
    </section>
  );
};

export default Offer;
