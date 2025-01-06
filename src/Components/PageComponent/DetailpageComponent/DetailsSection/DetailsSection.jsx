import React from "react";
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

const DetailsSection = () => {
  let swiperInstance = null;
  const feateures = [
    "Roblox gift cards has various amounts, allowing players to choose the card that best fits their budget.",
    "Roblox gift cards can be redeemed on multiple platforms, including PC, Mac, mobile devices etc.",
    "Hundreds of fantastic world created by the Roblox developers and the whole community",
    "Browse the in-game shop and buy awesome items using the game's currency Robux!",
    "Roblox gift cards are available in various regions, it has global usage.",
  ];

  const gift = [
    "Roblox is suitable for players of any age, and the moderators are always present to make the game's world safe for everyone ",
    "No need for a credit card, a secure way to add credit without sharing payment details.",
    "Some Roblox gift cards come with bonus virtual items or special content.",
    "Roblox gift cards can be purchased in stores or online and used worldwide.",
  ];

  const roblox = [
    "Log in to your account on www.roblox.com",
    "Head on to Gift Card Redemption Page",
    "Enter the activation code from the Gift Card",
    "Click 'Redeem' and that's it!",
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <div className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-5 ">
            <Heading
              Variant={"h5"}
              text={"Overview"}
              className={
                " text-2xl text-dark_black font-nunito font-semibold  "
              }
            />
            <Paragraph
              text={`Roblox Gift Cards are a convenient way for players to enhance their experience on the popular gaming platform Roblox. These gift cards can be used to purchase Robux (the in-game currency) or premium memberships like Roblox Premium. Roblox is an online F2P game developed by Roblox Corporation, in which players can create their own, unique character and explore hundreds of virtual worlds, created by developers, as well as the game's community - everyone can create their own world from scratch. The project created by Roblox Corp. gives players total freedom in terms of gameplay. During the gameplay, players can create a variety of tools, weapons, and other in-game items, and share them with the rest of the Roblox community.`}
              className={
                " text-lg font-nunito font-normal text-secondary_gray leading-[180%]  "
              }
            />
          </div>
          <div className="flex flex-col gap-y-5 ">
            <Heading
              Variant={"h5"}
              text={"Key Features"}
              className={
                " text-2xl text-dark_black font-nunito font-semibold  "
              }
            />
            <ul className="flex flex-col gap-y-6 ">
              {feateures.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-row gap-x-[11px] items-center "
                  >
                    <div className="w-3 h-3 rounded-full bg-secondary_blue "></div>
                    <Paragraph
                      text={item}
                      className={
                        " font-nunito text-lg font-medium text-secondary_gray  "
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-y-5 ">
            <Heading
              Variant={"h5"}
              text={"Why Choose A Roblox Gift Card"}
              className={
                " text-2xl text-dark_black font-nunito font-semibold  "
              }
            />
            <ul className="flex flex-col gap-y-6 ">
              {gift.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex flex-row gap-x-[11px] items-center "
                  >
                    <div className="w-3 h-3 rounded-full bg-secondary_blue "></div>
                    <Paragraph
                      text={item}
                      className={
                        " font-nunito text-lg font-medium text-secondary_gray  "
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 ">
          <Heading
            Variant={"h5"}
            text={"How to Use A Roblox Gift Card"}
            className={" text-2xl text-dark_black font-nunito font-semibold  "}
          />
          <ul className="flex flex-col gap-y-6 ">
            {roblox.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-row gap-x-[11px] items-center "
                >
                  <div className="w-3 h-3 rounded-full bg-secondary_blue "></div>
                  <Paragraph
                    text={item}
                    className={
                      " font-nunito text-lg font-medium text-secondary_gray  "
                    }
                  />
                </li>
              );
            })}
          </ul>
        </div>
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
              onClick={() => {
                if (swiperInstance) swiperInstance.slidePrev();
              }}
              disabled={swiperInstance?.isBeginning}
              text={<IoIosArrowRoundBack />}
              className={
                "h-12 w-12 flex items-center justify-center border-[1px] text-2xl border-solid border-black rounded-full text-black"
              }
            />
            <Button
              onClick={() => {
                if (swiperInstance) swiperInstance.slideNext();
              }}
              disabled={swiperInstance?.isEnd}
              text={<IoIosArrowRoundForward />}
              className={
                "h-12 w-12 flex items-center justify-center text-black text-2xl border-[1px] border-solid border-black rounded-full"
              }
            />
          </div>
        </div>
        <div className="h-auto w-[1320px] bg-deep_ocean p-6 rounded-[16px] ">
          <Swiper
            modules={[Navigation]}
            onSwiper={swiper => (swiperInstance = swiper)}
            slidesPerView={4}
            spaceBetween={20}
            loop={true}
          >
            {/* Slides */}
            {likedProduct.map((item, index) => (
              <SwiperSlide key={index} className="h-auto ">
                <CommonProductCard
                  cardName={"liked card"}
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
    </section>
  );
};

export default DetailsSection;
