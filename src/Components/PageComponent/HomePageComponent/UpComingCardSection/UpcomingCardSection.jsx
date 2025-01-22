"use client";
import Heading from "../../../Tags/Heading/Heading";
import SwipperSlider from "../../../SwipperSlider/SwipperSlider";
import { specailUpcomingCardData } from "../../../DummyData/DummyData";
import grass from "../../../../assets/images/Home/grass.png";
import yellowLight from "../../../../assets/images/Home/yellow_light.png";
import giftLeft from "../../../../assets/images/Home/gift_left.png";
import { Image } from "../../../Tags/Image/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CommonProductCard from "../../../Cards/CommonProductCard/CommonProductCard";
import Button from "../../../Tags/Button/Button";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const UpcomingCardSection = () => {
  const swiperInstance = useRef(null); // Use a ref to persist swiper instance
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);

  const swiperInstanceTwo = useRef(null); // Use a ref to persist swiper instance
  const [isSwiperTwoInitialized, setIsSwiperTwoInitialized] = useState(false);
  const [slidePreview, setSlidePreview] = useState(1);
   const [sliderWidth, setSliderWidth] = useState(250);

  const SiteURl = import.meta.env.VITE_SITE_URL;

  useEffect(() => {
    if (swiperInstance.current) {
      setIsSwiperInitialized(true);
    }
  }, [swiperInstance.current]);

  useEffect(() => {
    if (swiperInstanceTwo.current) {
      setIsSwiperTwoInitialized(true);
    }
  }, [swiperInstanceTwo.current]);

  const [bestSeliingDatas, setbestSeliingDatas] = useState([]);
  const [upComingDatas, setupComingDatas] = useState([]);

  const fetchUpcomingCard = () => {
    axios({
      method: "get",
      url: `${SiteURl}/api/upcoming-cards`,
    })
      .then(res => {
        setupComingDatas(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetechBestSeliingCard = () => {
    axios({
      method: "get",
      url: `${SiteURl}/api/best-selling-cards`,
    })
      .then(res => {
        setbestSeliingDatas(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchUpcomingCard();
    fetechBestSeliingCard();
  }, []);

  console.log(
    upComingDatas,
    bestSeliingDatas,
    "this data for upcoming and best selling section"
  );

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




  return (
    <section className="flex flex-col w-full h-auto ">
      <div className="  h-auto py-5 2xl:py-10 bg-secondary_blue">
        <div className="w-[250px] md:w-[520px] lg:w-[560px]  2xl:w-[970px] 3xl:w-[1295px] mx-auto flex flex-col ">
          <Heading
            dataAos="fade-in"
            Variant={"h2"}
            text={"GIFT CARDS"}
            className={
              "text-white font-righteous text-[24px] lg:text-[26px] 3xl:text-[36px] font-normal"
            }
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${grass})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col  px-[20px] 4xl:px-[290px]  h-auto pt-8 pb-[38.5px]  gap-y-[64px]"
      >
        <div className="flex flex-col gap-y-8 ">
          <div className="flex flex-col w-[285px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px]  gap-y-2 items-start lg:flex-row justify-between">
            <Heading
              dataAos="fade-in"
              Variant={"h4"}
              text={"Upcoming Cards"}
              className={
                "text-black font-nunito text-[22px] lg:text-[26px] 3xl:text-[32px]  font-bold"
              }
            />
            <div className="flex flex-row items-center gap-x-3">
              <Button
                onClick={() => {
                  if (swiperInstance.current) {
                    swiperInstance.current.slidePrev();
                  }
                }}
                disabled={!isSwiperInitialized || swiperInstance.current?.isEnd}
                text={<IoIosArrowRoundBack />}
                className={
                  "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-white hover:shadow-custom_shadow ease-in-out duration-200 "
                }
              />
              <Button
                text={<IoIosArrowRoundForward />}
                onClick={() => {
                  if (swiperInstance.current) {
                    swiperInstance.current.slideNext();
                  }
                }}
                disabled={!isSwiperInitialized || swiperInstance.current?.isEnd}
                className={
                  "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center text-black  text-2xl border-[2px] border-solid border-black rounded-full hover:border-transparent hover:bg-white hover:shadow-custom_shadow ease-in-out duration-200 "
                }
              />
            </div>
          </div>
          <div className=" flex w-[285px]  mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px] items-center   py-[18px] px-[16px]  bg-off_blue rounded-[8px] ">
            <Swiper
              modules={[Navigation]}
              onSwiper={swiper => {
                swiperInstance.current = swiper; // Set the swiper instance on initialization
              }}
              slidesPerView={slidePreview} // Adjust the number of visible slides
              spaceBetween={20} // Custom gap between slides
              loop={true} // Enable looping if necessary
            >
              {/* Slides */}
              {upComingDatas.map((item, index) => (
                <SwiperSlide key={index} className="h-auto ">
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
      </div>

      <div
        style={{
          backgroundImage: `url(${yellowLight})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col px-[20px] 4xl:px-[290px] relative  h-auto pt-8 pb-[38.5px]  gap-y-[64px]"
      >
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col w-[285px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px]  gap-y-2 items-start lg:flex-row justify-between">
            <Heading
              dataAos="fade-in"
              Variant={"h4"}
              text={"Best Selling Cards"}
              className={
                " font-nunito text-[22px] lg:text-[26px] 3xl:text-[32px] font-bold text-white "
              }
            />
            <div className="flex flex-row items-center gap-x-3">
              <Button
                onClick={() => {
                  if (swiperInstanceTwo.current) {
                    swiperInstanceTwo.current.slidePrev();
                  }
                }}
                disabled={
                  !isSwiperTwoInitialized || swiperInstance.current?.isEnd
                }
                text={<IoIosArrowRoundBack />}
                className={
                  "lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white hover:border-transparent hover:bg-white hover:shadow-custom_shadow hover:text-black ease-in-out duration-200  "
                }
              />
              <Button
                onClick={() => {
                  if (swiperInstanceTwo.current) {
                    swiperInstanceTwo.current.slideNext();
                  }
                }}
                disabled={
                  !isSwiperTwoInitialized || swiperInstanceTwo.current?.isEnd
                }
                text={<IoIosArrowRoundForward />}
                className={
                  " lg:h-12 h-8 w-8 lg:w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white hover:border-transparent hover:bg-white hover:shadow-custom_shadow hover:text-black ease-in-out duration-200  "
                }
              />
            </div>
          </div>
          <div className="flex w-[285px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px] items-center   py-[18px] px-[16px]  bg-off_blue rounded-[8px] ">
            <Swiper
              modules={[Navigation]}
              onSwiper={swiper => {
                swiperInstanceTwo.current = swiper; // Set the swiper instance on initialization
              }}
              slidesPerView={slidePreview} // Adjust the number of visible slides
              spaceBetween={20} // Custom gap between slides
              loop={true} // Enable looping if necessary
            >
              {/* Slides */}
              {bestSeliingDatas.map((item, index) => (
                <SwiperSlide key={index} className="h-auto ">
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
        <Image
          data-aos="zoom"
          Src={giftLeft}
          AltTxt={"not found"}
          className={
            " hidden 3xl:flex absolute top-0 left-0 mt-[188px] ml-[128.05px] "
          }
        />
        <Image
          data-aos="zoom"
          Src={giftLeft}
          AltTxt={"not found"}
          className={
            " hidden 3xl:flex  absolute top-0 right-0 mt-[188px] mr-[128.05px] "
          }
        />
      </div>
    </section>
  );
};

export default UpcomingCardSection;
