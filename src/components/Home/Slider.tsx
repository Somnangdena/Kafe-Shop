import overlayBottom from "../../assets/images/overlay-bottom.png";
import slide1 from "../../assets/images/carousel-1.jpg";
import slide2 from "../../assets/images/carousel-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  desc: string;
  since: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: `${slide1}`,
    title: "Coffee",
    desc: "We Have Been Serving",
    since: "*Since 1980*",
  },
  {
    id: 1,
    image: `${slide2}`,
    title: "Coffee",
    desc: "We Have Been Serving",
    since: "*Since 1980*",
  },
];

const Slider = () => {
  return (
    <div className="w-full mb-12 p-0 relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="relative h-100 w-full md:h-auto 
        md:[&_.swiper-button-prev]:left-10! 
        md:[&_.swiper-button-next]:right-10!
        [&_.swiper-button-prev]:text-white!
        [&_.swiper-button-next]:text-white!
        [&_.swiper-button-prev]:w-6!
        [&_.swiper-button-next]:w-6!
        [&_.swiper-button-prev]:h-6!
        [&_.swiper-button-next]:h-6!
        md:[&_.swiper-button-prev]:w-10!
        md:[&_.swiper-button-next]:w-10!
        md:[&_.swiper-button-prev]:h-10!
        md:[&_.swiper-button-next]:h-10!
        ">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Background image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-accent/70" />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
                <h2 className="m-0 text-xl font-medium text-primary md:text-2xl">
                  {slide.desc}
                </h2>

                <h1 className="m-0 text-4xl font-bold leading-none tracking-wide text-white md:text-8xl lg:text-9xl">
                  {slide.title}
                </h1>

                <h2 className="m-0 mt-2 text-xl font-medium text-white md:text-2xl">
                  {slide.since}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="w-full h-3.75 absolute left-0 z-1"
        style={{ background: `url(${overlayBottom})`, bottom: "-1px" }}></div>
    </div>
  );
};

export default Slider;
