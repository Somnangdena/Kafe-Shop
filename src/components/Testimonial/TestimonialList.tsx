import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface Profile {
  id: number;
  name: string;
  img: string;
  desc: string;
}

const listCard: Profile[] = [
  {
    id: 1,
    name: "Sophia Bennett",
    img: p1,
    desc: "The coffee is rich and flavorful, and the atmosphere is incredibly cozy. I love coming here to relax, work, or catch up with friends.",
  },
  {
    id: 2,
    name: "Daniel Carter",
    img: p2,
    desc: "One of my favorite coffee spots! The staff are friendly, the pastries are delicious, and every cup of coffee tastes freshly made.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    img: p3,
    desc: "Such a lovely place with great coffee and a peaceful atmosphere. Their cappuccino is easily one of the best I've tried.",
  },
  {
    id: 4,
    name: "Michael Anderson",
    img: p4,
    desc: "Amazing coffee, welcoming service, and a beautiful space. It's become my go-to place whenever I need a good cup of coffee.",
  },
];

const TestimonialList = () => {
  return (
    <section className="max-w-5xl mx-auto pb-10 px-8 pt-5">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12!
            [&_.swiper-pagination-bullet]:h-2!
            [&_.swiper-pagination-bullet]:w-2!
            [&_.swiper-pagination-bullet]:rounded-full!
            [&_.swiper-pagination-bullet]:bg-primary!
            [&_.swiper-pagination-bullet]:opacity-100!
            [&_.swiper-pagination-bullet]:transition-all!
            [&_.swiper-pagination-bullet]:duration-300!
            [&_.swiper-pagination-bullet-active]:w-5!
            [&_.swiper-pagination-bullet-active]:bg-accent!
          ">
        {listCard.map((list) => (
          <SwiperSlide className="space-y-4" key={list.id}>
            <div className="flex items-center gap-3">
              <img
                className="w-20 h-20 object-cover object-center"
                src={list.img}
                alt={list.name}
              />
              <div className="space-y-1">
                <h3 className="text-accent text-xl font-semibold">
                  {list.name}
                </h3>
                <i className="text-accent/60 text-base">Profession</i>
              </div>
            </div>
            <p className="text-accent/60 text-base">{list.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialList;
