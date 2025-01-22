import React, { useEffect, useState, useRef } from "react";
import flame from "../../../../assets/images/Home/flame.png";
import Heading from "../../../Tags/Heading/Heading";
import Button from "../../../Tags/Button/Button";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import ClientReviewCard from "../../../Cards/ClientReviewCard/ClientReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ClientReviewCardData } from "../../../DummyData/DummyData";

const ClientSection = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper instance
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [slidePreview, setSlidePreview] = useState(1);

  // Update slidePreview dynamically based on screen size
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth <= 480) {
      setSlidePreview(1);
    } else if (innerWidth >= 702) {
      setSlidePreview(2);
    }
  }, [innerWidth]);

  return (
    <section
      style={{
        backgroundImage: `url(${flame})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full  h-auto 2xl:h-[531px] 4xl:px-[290px] py-10 2xl:py-20 flex flex-col gap-y-10"
    >
      <div className="flex flex-col px-6  gap-y-2 lg:gap-y-4 items-start lg:flex-row justify-between">
        <Heading
          dataAos={"fade-in"}
          Variant={"h4"}
          text={"WHAT OUR CLIENTS SAY"}
          className={
            "font-righteous text-[24px] lg:text-[26px] 3xl:text-[36px] font-normal text-white"
          }
        />
        <div className="flex flex-row items-center gap-x-3">
          {/* Previous Slide Button */}
          <Button
            dataAos={"fade-in"}
            onClick={() => swiperRef.current?.slidePrev()} // Use ref to control Swiper
            text={<IoIosArrowRoundBack />}
            className={
              "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white hover:border-transparent hover:bg-white hover:shadow-custom_shadow hover:text-black ease-in-out duration-200"
            }
          />
          {/* Next Slide Button */}
          <Button
            dataAos={"fade-in"}
            onClick={() => swiperRef.current?.slideNext()} // Use ref to control Swiper
            text={<IoIosArrowRoundForward />}
            className={
              "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white hover:border-transparent hover:bg-white hover:shadow-custom_shadow hover:text-black ease-in-out duration-200"
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center lg:justify-between w-full mx-auto gap-y-6 px-4">
        <Swiper
          modules={[Navigation]}
          onSwiper={swiper => (swiperRef.current = swiper)} // Set Swiper instance in ref
          slidesPerView={slidePreview}
          spaceBetween={20}
          loop={true}
        >
          {ClientReviewCardData.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
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
