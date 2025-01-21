import React, { useEffect, useState } from "react";
import flame from "../../../../assets/images/Home/flame.png";
import Heading from "../../../Tags/Heading/Heading";
import Button from "../../../Tags/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import ClientReviewCard from "../../../Cards/ClientReviewCard/ClientReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ClientReviewCardData } from "../../../DummyData/DummyData";


const ClientSection = () => {
  let swiperInstance = null; // Store the Swiper instance
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [slidePreview, setSlidePreview] = useState(1);
  const [sliderWidth, setSliderWidth] = useState(250);

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
    if (innerWidth <= 320 && innerWidth >= 321 && innerWidth <= 748) {
      // This block will handle widths from 320px to 575px
      setSlidePreview(1);
      setSliderWidth(300);
    }  else if (innerWidth >= 768) {
      // This block will handle widths below 320px
      setSlidePreview(2);
      setSliderWidth(1295);
    }
  }, [innerWidth, slidePreview, sliderWidth]);

  return (
    <section
      style={{
        backgroundImage: `url(${flame})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-auto 2xl:h-[531px] 4xl:px-[290px] py-20 flex flex-col gap-y-10"
    >
      <div className="flex flex-col w-[285px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px]  gap-y-2 lg:gap-y-4 items-start lg:flex-row justify-between">
        <Heading
          dataAos={"fade-in"}
          Variant={"h4"}
          text={"WHAT OUR CLIENTS SAY"}
          className={
            "font-righteous text-[24px] lg:text-[26px] 3xl:text-[36px]   font-normal text-white"
          }
        />
        <div className="flex flex-row items-center gap-x-3">
          <Button
            dataAos={"fade-in"}
            onClick={() => {
              if (swiperInstance) swiperInstance.slidePrev();
            }}
            disabled={swiperInstance?.isBeginning}
            text={<IoIosArrowRoundBack />}
            className={
              " lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white hover:border-transparent hover:bg-white hover:shadow-custom_shadow hover:text-black ease-in-out duration-200  "
            }
          />
          <Button
            dataAos={"fade-in"}
            onClick={() => {
              if (swiperInstance) swiperInstance.slideNext();
            }}
            disabled={swiperInstance?.isEnd}
            text={<IoIosArrowRoundForward />}
            className={
              "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white hover:border-transparent hover:bg-white hover:shadow-custom_shadow hover:text-black ease-in-out duration-200  "
            }
          />
        </div>
      </div>
      <div className="w-[285px] xs:w-[345px] sm:w-[465px] md:w-[548] lg:w-[732px] xl:w-[992px]  mx-auto 4xl:mx-0 4xl:w-auto  flex items-center justify-center 3xl:items-start 3xl:justify-start ">
        <Swiper
          modules={[Navigation]}
          onSwiper={swiper => (swiperInstance = swiper)} // Capture the Swiper instance
          slidesPerView={slidePreview} // Number of visible slides
          spaceBetween={20} // Gap between slides
          loop={true} // Enable looping
        >
          {ClientReviewCardData.map((item, index) => (
            <SwiperSlide
              key={index}
              className="h-auto flex items-center justify-center  "
            >
              <ClientReviewCard
                clientImg={item.clientImg}
                clientName={item.clientName}
                clientQuote={item.clientQuote}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;
