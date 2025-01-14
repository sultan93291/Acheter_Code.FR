"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../../Tags/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonProductCard from "../../../Cards/CommonProductCard/CommonProductCard";
import { likedProduct } from "../../../DummyData/DummyData";
import ReactHtmlParser from "html-react-parser";

const DetailsSection = Data => {
  const data = Data.Data;
  const desCreptionData =
    typeof data?.card?.description === "string"
      ? data?.card?.description
      : String(data?.card?.description);

  console.log("details section", data?.othersProduct );

  const swiperInstance = useRef(null); // Use a ref to persist swiper instance
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

  // Handle initialization and set state when swiper is ready
  useEffect(() => {
    if (swiperInstance.current) {
      setIsSwiperInitialized(true);
    }
  }, [swiperInstance.current]);

  return (
    <section className="flex flex-col gap-y-6">
      <div className="descretption_wrapper  ">
        {ReactHtmlParser(desCreptionData)}
      </div>
      <div className="relative flex flex-col gap-y-8 after:absolute after:w-full after:h-[1px] after:bg-[#B3BAC5] after:top-0 after:left-0 py-10   ">
        <div className="flex flex-row items-center justify-between">
          <Heading
            Variant={"h4"}
            text={"Other Products You May Like"}
            className={" text-2xl text-text_black font-nunito font-semibold "}
          />
          <div className="flex flex-row items-center gap-x-3">
            <Button
              onClick={() => swiperInstance.current?.slidePrev()}
              text={<IoIosArrowRoundBack className="w-8 h-8" />}
              className="h-12 w-12 flex items-center justify-center border-[1px] text-2xl border-solid border-black rounded-full text-black"
            />
            <Button
              onClick={() => swiperInstance.current?.slideNext()}
              text={<IoIosArrowRoundForward />}
              className="h-12 w-12 flex items-center justify-center text-black text-2xl border-[1px] border-solid border-black rounded-full"
            />
          </div>
        </div>
        <div className="h-auto w-[1320px] bg-deep_ocean p-6 rounded-[16px] ">
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
            {data?.othersProduct.map((item, index) => (
              <SwiperSlide key={item?.id} className="h-auto ">
                <CommonProductCard
                  id={item?.id}
                  cardName={item?.card_name}
                  cardHeight={"532px"}
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
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
