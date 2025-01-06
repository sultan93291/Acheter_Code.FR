import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonProductCard from "../Cards/CommonProductCard/CommonProductCard";
import Button from "../Tags/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const SwipperSlider = ({ data, cardHeight, cardName , customMargin }) => {
  let swiperInstance = null;
  return (
    <div className="relative w-[1285px] h-auto">
      {/* Left Navigation Button */}
      <Button
        className={`absolute left-0 z-20 w-12 h-12 transform  -translate-y-1/2 bg-white rounded-full top-[50%] flex items-center justify-center ml-[-52px] `}
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
        {data.map((item, index) => (
          <SwiperSlide key={index} className="h-auto ">
            <CommonProductCard
              cardName={cardName}
              cardHeight={cardHeight}
              bgImg={item?.bgImg}
              rating={item?.rating}
              discountpercentage={item?.discountpercentage}
              seller={item?.seller}
              heading={item?.heading}
              price={item?.price}
              subHeading={item?.subHeading}
              discountPrice={item?.discountPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <Button
        className={`absolute text-[26px] right-0 z-20 w-12 h-12 transform -translate-y-1/2 bg-white rounded-full top-[50%] flex items-center justify-center mr-[-50px]`}
        onClick={() => {
          if (swiperInstance) swiperInstance.slideNext();
        }}
        disabled={swiperInstance?.isEnd}
        text={<IoIosArrowRoundForward className="w-8 h-8" />}
      />
    </div>
  );
};

export default SwipperSlider;
