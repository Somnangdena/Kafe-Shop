import { img } from "motion/react-client";
import menu1 from "../../assets/images/menu-1.jpg";
import menu2 from "../../assets/images/menu-2.jpg";
import menu3 from "../../assets/images/menu-3.jpg";

interface Menu {
  id: number;
  name: string;
  img: string;
  price: number;
  desc: string;
}

const menuItem: Menu[] = [
  {
    id: 1,
    name: "Black Coffee",
    img: menu1,
    price: 5,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 2,
    name: "Chocolete Coffee",
    img: menu2,
    price: 7,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
  {
    id: 3,
    name: "Coffee With Milk",
    img: menu3,
    price: 9,
    desc: "Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor",
  },
];

const MenuList = () => {
  return (
    <section className="max-w-5xl mx-auto py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5 mx-10 px-5">
        {/* Hot */}
        <div className="space-y-8">
          <h2 className="font-bold text-3xl text-accent mb-10">Hot Coffee</h2>
          {menuItem.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-fit">
                    <img className="w-full h-auto rounded-full object-center object-cover" src={item.img} alt={img.name} />
                    <div className="absolute bg-primary py-2 px-3 -top-1 right-0 rounded-full">
                        <span className="font-semibold text-lg">${item.price}</span>
                    </div>
                </div>
              <div className="space-y-2 pr-5">
                <h3 className="font-semibold text-2xl text-accent">{item.name}</h3>
                <p className="text-base text-accent/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Cold */}
        <div className="space-y-8">
          <h2 className="font-bold text-3xl text-accent mb-10">Cold Coffee</h2>
          {menuItem.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4">
                <div className="relative w-fit">
                    <img className="rounded-full object-center object-cover" src={item.img} alt={img.name} />
                    <div className="absolute bg-primary py-2 px-3 -top-1 right-0 rounded-full">
                        <span className="font-semibold text-lg">${item.price}</span>
                    </div>
                </div>
              <div className="space-y-2 pr-5">
                <h3 className="font-semibold text-2xl text-accent">{item.name}</h3>
                <p className="text-base text-accent/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;
