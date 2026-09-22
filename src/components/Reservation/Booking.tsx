import overlayTop from "../../assets/images/overlay-top.png";
import overlayBottom from "../../assets/images/overlay-bottom.png";
import bg from "../../assets/images/bg.jpg";
import { FaCheck } from "react-icons/fa";

const Booking = () => {
  return (
    <section className="max-w-5xl m-auto py-10">
      <div className="relative mx-8">
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayTop})`, top: "-1px" }}></div>
        <div className="w-full bg-accent grid grid-cols-1 md:grid-cols-2 py-8 overflow-hidden">
          {/* Left */}
          <div
            className="bg-no-repeat w-full bg-cover bg-top relative p-10"
            style={{
              backgroundImage: `
      linear-gradient(rgba(51, 33, 29, 0.9), rgba(51, 33, 29, 0.9)), url(${bg})`,
            }}>
            <div className="flex flex-col h-full text-white justify-center items-start">
              <h2 className="text-primary font-bold text-4xl pb-2">30% OFF</h2>
              <h3 className="text-secondary font-bold text-3xl ">
                For Online Reservation
              </h3>
              <p className="text-sm py-4">
                Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum
                ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed
                diam. Ea et erat ut sed diam sea
              </p>
              <span className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />
                <h5>Lorem ipsum dolor sit amet</h5>
              </span>
              <span className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />
                <h5>Lorem ipsum dolor sit amet</h5>
              </span>
              <span className="flex justify-start items-center gap-3">
                <FaCheck className="text-primary" />
                <h5>Lorem ipsum dolor sit amet</h5>
              </span>
            </div>
          </div>
          {/* right */}
          <div className="text-white p-10 flex flex-col w-full justify-center items-center">
            <h2 className="text-secondary text-3xl font-bold pt-5 pb-4">
              Book Your Table
            </h2>
            <form className="flex flex-col w-full gap-5">
              <input
                className=" border border-primary py-2 px-3 cursor-pointer"
                type="text"
                id="name"
                name="name"
                required
                autoComplete="text"
                placeholder="Name"
              />
              <input
                className=" border border-primary py-2 px-3 cursor-pointer"
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email"
              />
              <input
                className="border border-primary py-2 px-3 cursor-pointer"
                onClick={(e) => e.currentTarget.showPicker()}
                type="date"
                id="date"
                name="date"
              />
              <input
                className="border border-primary py-2 px-3 cursor-pointer"
                onClick={(e) => e.currentTarget.showPicker()}
                type="time"
                id="time"
                name="time"
              />
              <select
                id="person"
                defaultValue="1"
                className="w-full border border-primary py-2 px-3 focus:outline-none cursor-pointer">
                <option className="bg-accent" value="1">
                  Person 1
                </option>
                <option className="bg-accent" value="2">
                  Person 2
                </option>
                <option className="bg-accent" value="3">
                  Person 3
                </option>
                <option className="bg-accent" value="4">
                  Person 4
                </option>
              </select>
              <button
                onClick={(e) => e.preventDefault()}
                className="bg-primary py-2 text-accent font-semibold cursor-pointer">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div
          className="w-full h-3.75 absolute left-0 z-1"
          style={{ background: `url(${overlayBottom})`, bottom: "-1px" }}></div>
      </div>
    </section>
  );
};

export default Booking;
