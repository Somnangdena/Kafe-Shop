import type { IconType } from "react-icons";
import service1 from "../../assets/images/service-1.jpg";
import service2 from "../../assets/images/service-2.jpg";
import service3 from "../../assets/images/service-3.jpg";
import service4 from "../../assets/images/service-4.jpg";
import { FaAward, FaCoffee, FaTable, FaTruck } from "react-icons/fa";

interface Service {
  id: number;
  title: string;
  icon: IconType;
  img: string;
  desc: string;
}

const ServiceList: Service[] = [
  {
    id: 1,
    title: "Fastest Door Delivery",
    icon: FaTruck,
    img: service1,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
  {
    id: 2,
    title: "Fresh Coffee Beans",
    icon: FaCoffee,
    img: service2,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
  {
    id: 3,
    title: "Best Quality Coffee",
    icon: FaAward,
    img: service3,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
  {
    id: 4,
    title: "Online Table Booking",
    icon: FaTable,
    img: service4,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor",
  },
];

const ServiceCard = () => {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-8 px-5 lg:px-0">
        {ServiceList.map((item) => (
          <article key={item.id} className="flex flex-col justify-center items-center gap-4 sm:flex-row ">
            <div className="w-full h-full flex-1">
              <img className="w-fit h-fit object-cover object-center" src={item.img} alt={item.title} />
            </div>
            <div className="space-y-2 flex-2">
              <div className="flex justify-start items-center gap-2">
                <span className="w-8 h-8 bg-primary flex justify-center items-center rounded-full">
                  <item.icon className="text-xl m-2" />
                </span>
                <h2 className="font-semibold text-accent text-xl">{item.title}</h2>
              </div>
              <p className="text-accent/60 text-base">{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
