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


const UpcomingCardSection = () => {
  let swiperInstance = null;
  let swiperInstanceTwo = null
  return (
    <section className="flex flex-col w-full h-auto ">
      <div className="w-full px-[300px] h-auto py-10 bg-secondary_blue">
        <Heading
          Variant={"h2"}
          text={"GIFT CARDS"}
          className={"card_section_heading"}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${grass})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="flex flex-col  px-[300px]  h-auto pt-8 pb-[38.5px]  gap-y-[64px]"
      >
        <div className="flex flex-col gap-y-8 ">
          <div className="flex flex-row justify-between">
            <Heading
              Variant={"h4"}
              text={"Upcoming Cards"}
              className={"card_sub_heading"}
            />
            <div className="flex flex-row items-center gap-x-3">
              <Button
                onClick={() => {
                  if (swiperInstance) swiperInstance.slidePrev();
                }}
                disabled={swiperInstance?.isBeginning}
                text={<IoIosArrowRoundBack />}
                className={
                  "h-12 w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-black rounded-full text-black"
                }
              />
              <Button
                onClick={() => {
                  if (swiperInstance) swiperInstance.slideNext();
                }}
                disabled={swiperInstance?.isEnd}
                text={<IoIosArrowRoundForward />}
                className={
                  "h-12 w-12 flex items-center justify-center text-black text-2xl border-[2px] border-solid border-black rounded-full"
                }
              />
            </div>
          </div>
          <div className="flex   w-auto py-[18px] px-[16px] bg-off_blue rounded-[8px] ">
            <Swiper
              modules={[Navigation]}
              onSwiper={swiper => (swiperInstance = swiper)} // Capture the Swiper instance
              slidesPerView={4} // Adjust the number of visible slides
              spaceBetween={20} // Custom gap between slides
              loop={true} // Enable looping if necessary
            >
              {/* Slides */}
              {specailUpcomingCardData.map((item, index) => (
                <SwiperSlide key={index} className="h-auto ">
                  <CommonProductCard
                    cardName={"upcoming cards"}
                    cardHeight={"532px"}
                    bgImg={item?.bgImg}
                    rating={item?.rating}
                    discountpercentage={item?.discountpercentage}
                    seller={item?.seller}
                    heading={item?.heading}
                    price={item?.price}
                    subHeading={item?.subHeading}
                    discountPrice={item?.discountPrice}
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
        className="flex flex-col px-[300px]    relative  h-auto pt-8 pb-[38.5px]  gap-y-[64px]"
      >
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-row justify-between">
            <Heading
              Variant={"h4"}
              text={"Best Selling Cards"}
              className={"card_sub_heading text-white "}
            />
            <div className="flex flex-row items-center gap-x-3">
              <Button
                onClick={() => {
                  if (swiperInstanceTwo) swiperInstanceTwo.slidePrev();
                }}
                disabled={swiperInstanceTwo?.isBeginning}
                text={<IoIosArrowRoundBack />}
                className={
                  "h-12 w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-white rounded-full text-white"
                }
              />
              <Button
                onClick={() => {
                  if (swiperInstanceTwo) swiperInstanceTwo.slideNext();
                }}
                disabled={swiperInstanceTwo?.isEnd}
                text={<IoIosArrowRoundForward />}
                className={
                  "h-12 w-12 flex items-center justify-center text-white text-2xl border-[2px] border-solid border-white rounded-full"
                }
              />
            </div>
          </div>
          <div className="flex  w-auto py-[18px] px-[16px]  bg-off_blue rounded-[8px] ">
            <Swiper
              modules={[Navigation]}
              onSwiper={swiper => (swiperInstanceTwo = swiper)} // Capture the Swiper instance
              slidesPerView={4} // Adjust the number of visible slides
              spaceBetween={20} // Custom gap between slides
              loop={true} // Enable looping if necessary
            >
              {/* Slides */}
              {specailUpcomingCardData.map((item, index) => (
                <SwiperSlide key={index} className="h-auto ">
                  <CommonProductCard
                    cardName={"upcoming cards"}
                    cardHeight={"532px"}
                    bgImg={item?.bgImg}
                    rating={item?.rating}
                    discountpercentage={item?.discountpercentage}
                    seller={item?.seller}
                    heading={item?.heading}
                    price={item?.price}
                    subHeading={item?.subHeading}
                    discountPrice={item?.discountPrice}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Image
          Src={giftLeft}
          AltTxt={"not found"}
          className={" absolute top-0 left-0 mt-[188px] ml-[128.05px] "}
        />
        <Image
          Src={giftLeft}
          AltTxt={"not found"}
          className={" absolute top-0 right-0 mt-[188px] mr-[128.05px] "}
        />
      </div>
    </section>
  );
};

export default UpcomingCardSection;
