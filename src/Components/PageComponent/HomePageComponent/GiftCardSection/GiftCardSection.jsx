import jungle from "../../../../assets/images/Home/jungle.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonProductCard from "../../../Cards/CommonProductCard/CommonProductCard";
import Button from "../../../Tags/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const GiftCardSection = () => {
  let swiperInstance = null;

  // Handle dynamic slides (replace with actual dynamic data)
  const slides = [
    "1","2","3","4","5","6","7","8","9"
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${jungle})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-[760px] flex items-center justify-center relative"
    >
      <div className="relative w-[1285px] h-auto">
        {/* Left Navigation Button */}
        <Button
          className="absolute left-0 z-20 w-12 h-12 transform ml-[-52px] -translate-y-1/2 bg-gray-200 rounded-full top-[50%] flex items-center justify-center"
          onClick={() => {
            if (swiperInstance) swiperInstance.slidePrev();
          }}
          disabled={swiperInstance?.isBeginning}
          text={<IoIosArrowRoundBack className="w-8 h-8" />}
        />

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          onSwiper={swiper => (swiperInstance = swiper)} // Capture the Swiper instance
          slidesPerView={4} // Adjust the number of visible slides
          spaceBetween={20} // Custom gap between slides
          loop={true} // Enable looping if necessary
        >
          {/* Slides */}
          {slides.map(slide => (
            <SwiperSlide key={slide.id} className="h-auto py-6">
              <CommonProductCard />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <Button
          className="absolute text-[26px] right-0 mr-[-50px] z-20 w-12 h-12 transform -translate-y-1/2 bg-gray-200 rounded-full top-[50%] flex items-center justify-center"
          onClick={() => {
            if (swiperInstance) swiperInstance.slideNext();
          }}
          disabled={swiperInstance?.isEnd}
          text={<IoIosArrowRoundForward className="w-8 h-8" />}
        />
      </div>
    </section>
  );
};

export default GiftCardSection;
