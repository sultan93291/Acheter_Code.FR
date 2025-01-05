import React from "react";
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

  return (
    <section
      style={{
        backgroundImage: `url(${flame})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="w-full h-[531px] px-[290px] py-20 flex flex-col gap-y-10"
    >
      <div className="flex justify-between flow-row">
        <Heading
          Variant={"h4"}
          text={"WHAT OUR CLIENTS SAY"}
          className={"product_heading text-white"}
        />
        <div className="flex flex-row items-center gap-x-3">
          <Button
            onClick={() => {
              if (swiperInstance) swiperInstance.slidePrev();
            }}
            disabled={swiperInstance?.isBeginning}
            text={<IoIosArrowRoundBack />}
            className={
              "h-12 w-12 flex items-center justify-center border-[1px] text-2xl border-solid border-white rounded-full text-white"
            }
          />
          <Button
            onClick={() => {
              if (swiperInstance) swiperInstance.slideNext();
            }}
            disabled={swiperInstance?.isEnd}
            text={<IoIosArrowRoundForward />}
            className={
              "h-12 w-12 flex items-center justify-center text-white text-2xl border-[1px] border-solid border-white rounded-full"
            }
          />
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          onSwiper={swiper => (swiperInstance = swiper)} // Capture the Swiper instance
          slidesPerView={2} // Number of visible slides
          spaceBetween={20} // Gap between slides
          loop={true} // Enable looping
        >
          {ClientReviewCardData.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ClientReviewCard clientImg={item.clientImg} clientName={item.clientName} clientQuote={item.clientQuote}  />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;
