import slide1 from "../../assets/images/carousel-1.jpg";
import slide2 from "../../assets/images/carousel-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        since: "*Since 1980*"
    },
    {
        id: 1,
        image: `${slide2}`,
        title: "Coffee",
        desc: "We Have Been Serving",
        since: "*Since 1980*"
    },
]


const Slider = () => {
  return (
    <section className="relative min-h-150 w-full overflow-hidden">
      <Swiper
        modules={[
          Autoplay,
          Navigation,
        ]}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full py-20">
              {/* Background */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60" />

              {/* Extra brown overlay */}
              <div className="absolute inset-0 bg-[#33211a]/20" />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                <div className="text-white">
                  <p className="mb-5 text-xl font-medium tracking-wide sm:text-2xl">
                    {slide.desc}
                  </p>

                  <h1 className="text-6xl font-black tracking-[0.15em] sm:text-7xl md:text-8xl lg:text-9xl">
                    {slide.title}
                  </h1>

                  <p className="mt-5 text-xl font-medium tracking-[0.35em] sm:text-2xl">
                   {slide.since}
                  </p>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Slider