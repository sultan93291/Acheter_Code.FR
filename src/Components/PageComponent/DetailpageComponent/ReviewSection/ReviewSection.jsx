import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import { EmptyStar, FullStarIcon } from "../../../Svg/Svg";
import { Image } from "../../../Tags/Image/Image";
import half_star from "../../../../assets/images/Details/halfStar.png";
import empty_star from "../../../../assets/images/Details/empty_star.png";
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

const ReviewSection = ({ data }) => {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  const [reviewData, setreviewData] = useState({});

  console.log("i'm main data", data);

  const generateStars = rating => {
    const starIcons = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    for (let i = 0; i < fullStars; i++) starIcons.push(<FullStarIcon />);
    if (halfStar) starIcons.push(<Image Src={half_star} AltTxt="half-star" />);
    for (let i = 0; i < emptyStars; i++)
      starIcons.push(<Image Src={empty_star} AltTxt="half-star" />);

    return starIcons;
  };

  console.log("average rating", data?.card?.reviews_count);
  const reviewStars = generateStars(parseFloat(data?.card?.reviews_avg_rating));

  return (
    <section className="flex flex-col gap-y-[36px]">
      {/* Section Title */}
      <Heading
        Variant={"h3"}
        text={"Customers Reviews"}
        className={" font-nunito text-[32px] font-bold text-shade_black "}
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
                text={parseFloat(data?.card?.reviews_avg_rating).toFixed(1)}
                className={"text-[40px] font-nunito text-black font-semibold"}
              />
              <div className="flex flex-col gap-y-[4px]">
                <Heading
                  Variant={"h5"}
                  text={` ${data?.card?.reviews_count} Reviews `}
                  className={"text-lg text-black font-nunito font-semibold"}
                />
                <div className="flex flex-row items-center gap-x-2">
                  {/* {review stars} */}
                  {reviewStars}
                </div>
              </div>
            </div>

            {/* Star Ratings Breakdown */}
            <div className="flex flex-col items-center gap-y-4">
              {data?.reviews
                .slice()
                .reverse()
                .map((star, index) => {
                  let reviewPercent = Number(
                    star.reviewPercentages.replace("%", "")
                  );

                  return (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-x-2"
                    >
                      {/* Star Heading */}
                      <div className="flex flex-row items-center justify-center gap-x-2">
                        <Heading
                          Variant={"h6"}
                          text={star?.value}
                          className={"text-lg font-semibold font-nunito"}
                        />
                        <FullStarIcon />
                      </div>

                      {/* Progress Bar */}
                      <div className="w-[305px] h-[9px] rounded-[16px] bg-light_gray relative">
                        <div
                          className="absolute bg-orange top-0 left-0 h-full rounded-[16px]"
                          style={{
                            width: `${reviewPercent}%`, // Dynamically set the width of the progress bar
                          }}
                        ></div>
                      </div>

                      {/* Percentage Heading */}
                      <Heading
                        Variant={"h6"}
                        text={` ${reviewPercent} %`}
                        className={`text-lg  font-semibold font-nunito w-[45px] `}
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
              {data.card.reviews.map((review, index) => {
                const reviewStars = generateStars(review.rating);
                console.log(review?.comment);

                return (
                  <SwiperSlide key={index}>
                    <div className=" w-[762px] h-auto py-6 pl-[68px] pr-[96px] bg-white  shadow-custom_shadow rounded-[16px] flex flex-col gap-y-4 ">
                      <div className="flex flex-row items-center gap-x-4    ">
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
                            text={review?.user?.name}
                            className={
                              "text-lg text-black font-nunito font-semibold"
                            }
                          />
                          <div className="flex flex-row items-center gap-x-2">
                            {reviewStars}
                          </div>
                        </div>
                      </div>
                      <Paragraph
                        className={
                          "text-lg font-nunito font-normal leading-[180%] text-[#253858] h-[96px] ellipsis overflow-y-hidden   "
                        }
                        text={review?.comment}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
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
