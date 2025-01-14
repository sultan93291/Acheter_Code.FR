"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import { FullStarIcon } from "../../../Svg/Svg";
import { Image } from "../../../Tags/Image/Image";
import half_star from "../../../../assets/images/Details/halfStar.png";
import empty_star from "../../../../assets/images/Details/empty_star.png";
import full_star from "../../../../assets/images/Details/full_star.png";
import Button from "../../../Tags/Button/Button";
import { Input } from "../../../Tags/Input/Input";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import glassMan from "../../../../assets/images/Details/glassMan.png";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { comment } from "postcss";

const ReviewSection = ({ data }) => {
  const swiperRef = useRef(null); // Ref to the Swiper instance
  const [reviewData, setreviewData] = useState();
  const loggedInuserData = useSelector(
    state => state.loggedInUserSlice.loggedInUserData
  );

  const navigate = useNavigate();

  const [totalTrueRatings, setTotalTrueRatings] = useState(0);

  const [ratingStore, setRatingStore] = useState([
    {
      id: "1",
      isRating: false,
    },
    {
      id: "2",
      isRating: false,
    },
    {
      id: "3",
      isRating: false,
    },
    {
      id: "4",
      isRating: false,
    },
    {
      id: "5",
      isRating: false,
    },
  ]);
  const { id } = useParams();

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

  console.log(loggedInuserData);

  console.log("average rating", data?.card?.reviews_count);
  const reviewStars = generateStars(parseFloat(data?.card?.reviews_avg_rating));

  const handleRating = id => {
    setRatingStore(prev => {
      return prev.map((item, index) => {
        const currentIndex = prev.findIndex(obj => obj.id === id);

        // Check if all previous IDs are true before toggling the current one
        const allPreviousTrue = prev
          .slice(0, currentIndex)
          .every(obj => obj.isRating);

        // Check if no later IDs are true before toggling the current one to false
        const noLaterTrue = prev
          .slice(currentIndex + 1)
          .every(obj => !obj.isRating);

        if (item.id === id) {
          if (item.isRating) {
            return noLaterTrue ? { ...item, isRating: false } : item;
          } else {
            return allPreviousTrue ? { ...item, isRating: true } : item;
          }
        }
        return item;
      });
    });

    // Update the total true ratings
    setTotalTrueRatings(
      ratingStore.filter(item =>
        item.id === id ? !item.isRating : item.isRating
      ).length
    );
  };
  const handleReviewData = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!loggedInuserData.id) {
      navigate("/login");
    } else {
      axios({
        method: "post",
        url: "https://borisdessy.softvencefsd.xyz/api/review/store",
        data: {
          user_id: loggedInuserData?.id,
          card_id: id,
          rating: totalTrueRatings,
          comment: reviewData,
          token: token,
        },
      })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(
          setRatingStore(prevState =>
            prevState.map(rating => ({
              ...rating,
              isRating: false, // Reset isRating to false for each item
            }))
          ),
          setTotalTrueRatings(0),
          setreviewData("")
        );
    }
  };

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
              <div className="flex flex-row gap-x-2">
                {ratingStore.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        handleRating(item?.id);
                      }}
                    >
                      <Image
                        key={index}
                        Src={item.isRating ? full_star : empty_star}
                        AltTxt={"not found"}
                        className={"w-4 h-4 bg-cover cursor-pointer "}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <form
              onSubmit={e => {
                handleReviewData(e);
              }}
              className="flex flex-col gap-y-6"
            >
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
                    placeholder={
                      loggedInuserData.name
                        ? loggedInuserData?.name
                        : "John Doe"
                    }
                    disabled={true}
                    defaultValue={
                      loggedInuserData?.name
                        ? loggedInuserData?.name
                        : "John Doe"
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <Heading
                    Variant={"h4"}
                    className={"lg_tittle capitalize"}
                    text={"Write Your Review"}
                  />
                  <textarea
                    onChange={e => {
                      setreviewData(e.target.value);
                    }}
                    className={
                      "outline-none py-[10px] px-4 rounded-[16px] border-[1px] border-solid border-light_gray text-[16px] font-nunito font-medium text-text_gray"
                    }
                    value={reviewData}
                    placeholder={"Write here"}
                  ></textarea>
                </div>
              </div>
              <Button
                disabled={
                  !id || !totalTrueRatings || !reviewData ? true : false
                }
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
                

                return (
                  <SwiperSlide key={index}>
                    <div className=" w-[762px] h-auto py-6 pl-[68px] pr-[96px] bg-white  shadow-custom_shadow rounded-[16px] flex flex-col gap-y-4 ">
                      <div className="flex flex-row items-center gap-x-4    ">
                        <Image
                          Src={ review?.user?.avatar ? review?.user?.avatar: glassMan}
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
