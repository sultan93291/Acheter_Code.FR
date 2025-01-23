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
  const [slidePreview, setSlidePreview] = useState(1);
  const [sliderWidth, setSliderWidth] = useState(250);


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
      if (innerWidth <= 320 && innerWidth >= 321 && innerWidth <= 575) {
        // This block will handle widths from 320px to 575px
        setSlidePreview(1);
        setSliderWidth(300);
      } else if (innerWidth >= 576 && innerWidth <= 1199) {
        // This block will handle widths 576px and above
        setSlidePreview(2);
        setSliderWidth(550);
        console.log("width is 525 ", innerWidth);
      } else if (innerWidth >= 1200 && innerWidth <= 1424) {
        // This block will handle widths below 320px
        setSlidePreview(3);
      } else if (innerWidth >= 1425 && innerWidth < 1500) {
        // This block will handle widths below 320px
        setSlidePreview(3);

        console.log("width is 400 ", innerWidth);
      } else if (innerWidth >= 1500) {
        // This block will handle widths below 320px
        setSlidePreview(4);
        setSliderWidth(1295);
        console.log("width is 400 ", innerWidth);
      }
    }, [innerWidth, slidePreview, sliderWidth]);



  // Handle initialization and set state when swiper is ready
  useEffect(() => {
    if (swiperInstance.current) {
      setIsSwiperInitialized(true);
    }
  }, [swiperInstance.current]);

  return (
    <section className="flex flex-col px-5 xl:px-10 2xl:px-16 4xl:px-0 gap-y-6">
      <div data-aos="fade-in" className="descretption_wrapper  ">
        {ReactHtmlParser(desCreptionData)}
      </div>
      <div className="relative flex flex-col gap-y-8 after:absolute after:w-full after:h-[1px] after:bg-[#B3BAC5] after:top-0 after:left-0 py-10   ">
        <div className=" flex flex-col w-[295px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1330px]  gap-y-2 items-start lg:flex-row justify-between ">
          <Heading
            dataAos={"fade-in"}
            Variant={"h4"}
            text={"Other Products You May Like"}
            className={
              "  text-text_black  font-nunito text-[22px] lg:text-[26px] 3xl:text-[32px]  font-bold  "
            }
          />
          <div className="flex flex-row items-center gap-x-3">
            <Button
              data-aos={"fade-in"}
              onClick={() => swiperInstance.current?.slidePrev()}
              text={<IoIosArrowRoundBack className="w-8 h-8" />}
              className={
                "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-black  ease-in-out duration-200 hover:text-white  "
              }
            />
            <Button
              data-aos={"fade-in"}
              onClick={() => swiperInstance.current?.slideNext()}
              text={<IoIosArrowRoundForward />}
              className={
                "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-black  ease-in-out duration-200 hover:text-white  "
              }
            />
          </div>
        </div>
        <div className="h-auto  flex w-[285px]  mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1330px] items-center   py-[18px] px-[16px]   bg-deep_ocean p-[14px] rounded-[16px] ">
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
