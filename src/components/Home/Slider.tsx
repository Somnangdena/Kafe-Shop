import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import slide1 from "../../assets/images/carousel-1.jpg";
import slide2 from "../../assets/images/carousel-2.jpg";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

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
    <section className="h-96 w-full">
        <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex h-full w-full items-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundColor: "rgba(51,33,29,0.7)"
              }}
            >
              {/* Overlay */}

              {/* Content */}
              <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-5 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
                    {slide.desc}
                  </p>

                  <h4
                    className="mt-8 rounded-lg px-7 py-3.5 font-semibold text-white transition"
                  >
                    {slide.since}
                  </h4>
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