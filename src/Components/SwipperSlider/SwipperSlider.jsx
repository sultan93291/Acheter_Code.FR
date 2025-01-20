import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonProductCard from "../Cards/CommonProductCard/CommonProductCard";
import Button from "../Tags/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState, useRef, useEffect } from "react";


const SwipperSlider = ({ data, cardHeight, cardName, customMargin }) => {
  const swiperInstance = useRef(null); // Use a ref to persist swiper instance
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

  // Handle initialization and set state when swiper is ready
  useEffect(() => {
    if (swiperInstance.current) {
      setIsSwiperInitialized(true);
    }
  }, [swiperInstance.current]);

  const handleNav = () => {
    console.log("Navigation button clicked");
  };

  return (
    <div className="relative w-[1295px] h-auto">
      {/* Left Navigation Button */}

      <Button
        data-aos="fade-in"
        className={`absolute left-0 z-20 w-12 h-12 transform -translate-y-1/2 border-[2px] border-solid border-transparent bg-white rounded-full top-[50%] flex items-center justify-center ml-[-52px] ease-in-out duration-200 hover:bg-transparent hover:border-white group  `}
        onClick={() => {
          if (swiperInstance.current) {
            swiperInstance.current.slidePrev();
          }
        }}
        disabled={!isSwiperInitialized || swiperInstance.current?.isEnd}
        text={
          <IoIosArrowRoundBack className="w-8 h-8 group-hover:text-white " />
        }
      />

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={swiper => {
          swiperInstance.current = swiper; // Set the swiper instance on initialization
        }}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
      >
        {/* Slides */}
        {data.map(item => (
          <SwiperSlide key={item?.id} className="h-auto">
            <CommonProductCard
              id={item?.id}
              cardName={item?.card_name}
              cardHeight={cardHeight}
              bgImg={`https://borisdessy.softvencefsd.xyz/${item?.image}`}
              rating={item?.reviews_avg_rating}
              discountpercentage={`${Math.floor(
                ((item?.price - item?.discount) / item?.price) * 100
              )}%`}
              seller={item?.seller_name}
              heading={item?.platform_name}
              price={item?.price}
              subHeading={item?.subHeading}
              discountPrice={item?.discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <Button
        data-aos="fade-in"
        className={`absolute text-[26px] right-0 z-20 w-12 h-12 transform -translate-y-1/2 bg-white rounded-full top-[50%] border-[2px] border-solid border-transparent flex items-center justify-center mr-[-50px] ease-in-out duration-200 hover:bg-transparent hover:border-white group   `}
        onClick={() => {
          if (swiperInstance.current) {
            swiperInstance.current.slideNext();
          }
        }}
        disabled={!isSwiperInitialized || swiperInstance.current?.isEnd}
        text={
          <IoIosArrowRoundForward className="w-8 h-8 group-hover:text-white " />
        }
      />
    </div>
  );
};

export default SwipperSlider;
