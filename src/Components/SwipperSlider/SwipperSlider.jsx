import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonProductCard from "../Cards/CommonProductCard/CommonProductCard";
import Button from "../Tags/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

const SwipperSlider = ({ data, cardHeight, cardName, customMargin }) => {
  const swiperInstance = useRef(null); // Use a ref to persist swiper instance
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);
  const [slidePreview, setSlidePreview] = useState(1);
  const [sliderWidth, setSliderWidth] = useState(250);

  // Handle initialization and set state when swiper is ready
  useEffect(() => {
    if (swiperInstance.current) {
      setIsSwiperInitialized(true);
    }
  }, [swiperInstance.current]);

  const handleNav = () => {
    console.log("Navigation button clicked");
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth); // Update the state with the current width
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (innerWidth <= 320   && innerWidth <= 575) {
      // This block will handle widths from 320px to 575px
      setSlidePreview(1);
      setSliderWidth(300);
    } else if (innerWidth >= 576 && innerWidth <= 1199) {
      // This block will handle widths 576px and above
      setSlidePreview(2);
      setSliderWidth(550);
      console.log("width is 525 ", innerWidth);
    }
     else if (innerWidth >= 1200 && innerWidth <= 1424) {
      // This block will handle widths below 320px
      setSlidePreview(3);
    } else if (innerWidth >= 1425 && innerWidth <1500) {
      // This block will handle widths below 320px
      setSlidePreview(3);

      console.log("width is 400 ", innerWidth);
    }
    else if (innerWidth >= 1500) {
      // This block will handle widths below 320px
      setSlidePreview(4);
      setSliderWidth(1295);
      console.log("width is 400 ", innerWidth);
    }
  }, [innerWidth, slidePreview, sliderWidth]);


  return (
    <div
      className={`relative w-[250px] md:w-[520px] lg:w-[560px]  2xl:w-[970px] 3xl:w-[1295px]   h-auto`}
    >
      {/* Left Navigation Button */}

      <Button
        data-aos="fade-in"
        className={`  absolute left-0 z-20 w-[30px] xs:w-10 xs:h-10 2xl:w-12 h-[30px] 2xl:h-12 transform -translate-y-1/2 border-[2px] border-solid border-transparent bg-white rounded-full top-[50%] flex items-center justify-center md:ml-[-24px] lg:ml-[-52px] ml-[-34px] xs:ml-[-52px] ease-in-out duration-200 hover:bg-transparent hover:border-white group  `}
        onClick={() => {
          if (swiperInstance.current) {
            swiperInstance.current.slidePrev();
          }
        }}
        disabled={!isSwiperInitialized || swiperInstance.current?.isEnd}
        text={
          <IoIosArrowRoundBack className="w-7 h-7 group-hover:text-white " />
        }
      />

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        onSwiper={swiper => {
          swiperInstance.current = swiper; // Set the swiper instance on initialization
        }}
        slidesPerView={slidePreview}
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
        className={`absolute  text-[26px] right-0 z-20 
          2xl:w-12 w-[30px] h-[30px] xs:h-10 xs:w-10 2xl:h-12 transform -translate-y-1/2 bg-white rounded-full top-[50%] border-[2px] border-solid border-transparent flex items-center justify-center md:mr-[-22px] lg:mr-[-50px]  mr-[-32px]  xs:mr-[-50px] ease-in-out duration-200 hover:bg-transparent hover:border-white group   `}
        onClick={() => {
          if (swiperInstance.current) {
            swiperInstance.current.slideNext();
          }
        }}
        disabled={!isSwiperInitialized || swiperInstance.current?.isEnd}
        text={
          <IoIosArrowRoundBack className="w-7 h-7 group-hover:text-white rotate-[180deg] " />
        }
      />
    </div>
  );
};

export default SwipperSlider;
