import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function Slider() {
  const cards = [
    {
      number: 1,
      title: "NEW ADVENTURE",
      date: "17 March 2019",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      number: 2,
      title: "NEW ADVENTURE",
      date: "17 March 2019",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      number: 3,
      title: "NEW ADVENTURE",
      date: "17 March 2019",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      number: 4,
      title: "NEW ADVENTURE",
      date: "17 March 2019",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      number: 5,
      title: "NEW ADVENTURE",
      date: "17 March 2019",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
    {
      number: 6,
      title: "NEW ADVENTURE",
      date: "17 March 2019",
      text: "Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan tincidunt.",
    },
  ]

  return (
    <div className="text-center lg:text-left container mx-auto px-6 py-12">
      <span className=" font-bold lg:text-lg text-[#FF3946]">BLOG STORIES</span>
      <h2 className="text-[#314584] font-bold text-3xl lg:text-5xl my-6">Check Our News</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
        modules={[Autoplay, Navigation]}
        className=""
      >
        {cards.map((card) => {
          return(
            <SwiperSlide key={card.number} className="cursor-pointer p-4 border-2 border-[#e6e6e6] bg-[#FF3946] text-white text-center">
              <h2 className="font-bold mb-2 mt-6">{card.title}</h2>
              <span className="text-sm">{card.date}</span>
              <p className="w-4/5 mx-auto mb-6 mt-2 text-lg">{card.text}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
