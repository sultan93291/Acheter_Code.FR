import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import { FullStarIcon } from "../../../Svg/Svg";
import { Image } from "../../../Tags/Image/Image";
import half_star from "../../../../assets/images/Details/halfStar.png";
import star_group from "../../../../assets/images/Details/starGroup.png";
import Button from "../../../Tags/Button/Button";
import { Input } from "../../../Tags/Input/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import glassMan from "../../../../assets/images/Details/glassMan.png";


const ReviewSection = ({data}) => {
  const swiperRef = useRef(null); // Ref to the Swiper instance

  return (
    <section className="flex flex-col gap-y-[36px]">
      {/* Section Title */}
      <Heading
        Variant={"h3"}
        text={"Customers Reviews"}
        className={
          " font-nunito text-[32px] font-bold text-shade_black "
        }
      />

      {/* Main Content */}
      <div className="flex flex-row gap-x-5">
        {/* Left Section: Ratings Summary and Review Form */}
        <div className="flex flex-col gap-y-5">
          {/* Ratings Summary */}
          <div className="w-[538px] py-[60px] flex flex-col items-center gap-y-5 bg-white shadow-custom_shadow rounded-[16px]">
            <div className="flex flex-row gap-x-[44px] items-center">
              <Heading
                Variant={"h2"}
                text={"4.5"}
                className={"text-[40px] font-nunito text-black font-semibold"}
              />
              <div className="flex flex-col gap-y-[4px]">
                <Heading
                  Variant={"h5"}
                  text={"10k Reviews"}
                  className={"text-lg text-black font-nunito font-semibold"}
                />
                <div className="flex flex-row items-center gap-x-2">
                  <FullStarIcon />
                  <FullStarIcon />
                  <FullStarIcon />
                  <FullStarIcon />
                  <Image Src={half_star} AltTxt={"not found"} />
                </div>
              </div>
            </div>

            {/* Star Ratings Breakdown */}
            <div className="flex flex-col items-center gap-y-4">
              {[5, 4, 3, 2, 1].map((star, index) => {
                const percentages = [90, 70, 40, 30, 0];
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-x-2"
                  >
                    <div className="flex flex-row items-center justify-center gap-x-2">
                      <Heading
                        Variant={"h6"}
                        text={`${star}`}
                        className={"text-lg font-semibold font-nunito"}
                      />
                      <FullStarIcon />
                    </div>
                    <div className="w-[305px] h-[9px] rounded-[16px] bg-light_gray relative">
                      <div
                        className="absolute bg-orange top-0 left-0 h-full rounded-[16px]"
                        style={{
                          width: `${percentages[index]}%`,
                        }}
                      ></div>
                    </div>
                    <Heading
                      Variant={"h6"}
                      text={`${percentages[index]}%`}
                      className={`text-lg ${
                        index === 4 && "w-[39px]"
                      } font-semibold font-nunito`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Review Form */}
          <div className="w-[538px] py-[60px] px-[55px] bg-white shadow-custom_shadow rounded-[16px] flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-3">
              <Heading
                Variant={"h4"}
                className={"lg_tittle capitalize"}
                text={"Add Your Rating"}
              />
              <Image
                Src={star_group}
                AltTxt={"not found"}
                className={"w-[99.5px] h-4 bg-cover"}
              />
            </div>
            <form className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                  <Heading
                    Variant={"h4"}
                    className={"lg_tittle capitalize"}
                    text={"Your Name"}
                  />
                  <Input
                    type={"text"}
                    className={
                      "outline-none py-[15px] px-4 rounded-[16px] border-[1px] border-solid border-light_gray text-[16px] font-nunito font-medium text-text_gray"
                    }
                    placeholder={"John Doe"}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Heading
                    Variant={"h4"}
                    className={"lg_tittle capitalize"}
                    text={"Write Your Review"}
                  />
                  <textarea
                    className={
                      "outline-none py-[10px] px-4 rounded-[16px] border-[1px] border-solid border-light_gray text-[16px] font-nunito font-medium text-text_gray"
                    }
                    placeholder={"Write here"}
                  ></textarea>
                </div>
              </div>
              <Button
                text={"SUBMIT REVIEWS"}
                className={
                  "text-lg rounded-[16px] shadow-btn_shadow bg-orange leading-[164%] font-nunito font-medium text-white py-[10px] px-5 w-[194px]"
                }
              />
            </form>
          </div>
        </div>

        {/* Right Section: Customer Reviews Carousel */}
        <div className="flex flex-row pt-4 gap-x-[16px]">
          <div className="flex flex-row  gap-x-4 h-[988px]">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={20}
              direction="vertical"
              navigation={{
                prevEl: ".nav-prev",
                nextEl: ".nav-next",
              }}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7].map((review, index) => (
                <SwiperSlide key={index}>
                  <div className=" w-[762px] h-auto py-6 pl-[68px] pr-[96px] bg-white  shadow-custom_shadow rounded-[16px] flex flex-col gap-y-4 ">
                    <div className="flex flex-row items-center gap-x-4 ">
                      <Image
                        Src={glassMan}
                        AltTxt={"not found"}
                        className={
                          " w-[72px] h-[72px] rounded-full object-cover  "
                        }
                      />
                      <div className="flex flex-col gap-y-[4px]  ">
                        <Heading
                          Variant={"h5"}
                          text={"Adrian Sami"}
                          className={
                            "text-lg text-black font-nunito font-semibold"
                          }
                        />
                        <div className="flex flex-row items-center gap-x-2">
                          <FullStarIcon />
                          <FullStarIcon />
                          <FullStarIcon />
                          <FullStarIcon />
                          <Image Src={half_star} AltTxt={"not found"} />
                        </div>
                      </div>
                    </div>
                    <Paragraph
                      className={
                        "text-lg font-nunito font-normal leading-[180%] text-[#253858]  "
                      }
                      text={
                        "I bought a gift card for my nephew’s birthday, and he absolutely loved it! He was so excited to pick out his own game and unlock new skins. It made the perfect gift for a gamer like him!”"
                      }
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex flex-col justify-end gap-y-3 ">
              <Button
                text={
                  <IoIosArrowRoundBack className="rotate-[90deg] text-2xl " />
                }
                className="h-12 w-12 flex items-center nav-prev cursor-pointer justify-center text-black border-[1px] border-solid border-black rounded-full"
              />
              <Button
                text={
                  <IoIosArrowRoundForward className="rotate-[90deg] text-2xl " />
                }
                className="h-12 w-12 flex items-center nav-next justify-center cursor-pointer text-black border-[1px] border-solid border-black rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
