import React from "react";
import Heading from "../../../Tags/Heading/Heading";
import Button from "../../../Tags/Button/Button";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BlogCardData } from "../../../DummyData/DummyData";
import BlogCard from "../../../Cards/BlogCard/BlogCard";
import blogGift from "../../../../assets/images/Home/blog_gift.png";
import blogGiftRight from "../../../../assets/images/Home/blog_gift_right.png";
import { Image } from "../../../Tags/Image/Image";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  let swiperInstance = null; // Store the Swiper instance
  const navigate = useNavigate();
  const handleBlogRedirect = id => {
    navigate(`blog/${id}`);
  };
  return (
    <section className="w-full h-[531px] px-[290px] relative my-20 flex flex-col gap-y-10">
      <div className="flex justify-between flow-row">
        <Heading
          Variant={"h4"}
          text={"READ OUR BLOGS"}
          dataAos={'fade-in'}
          className={
            "font-righteous text-heading_black text-[36px] font-normal "
          }
        />
        <div className="flex flex-row items-center gap-x-3">
          <Button
        
            onClick={() => {
              if (swiperInstance) swiperInstance.slidePrev();
            }}
            disabled={swiperInstance?.isBeginning}
            text={<IoIosArrowRoundBack />}
            className={
              "h-12 w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-black  ease-in-out duration-200 hover:text-white  "
            }
          />
          <Button
            onClick={() => {
              if (swiperInstance) swiperInstance.slideNext();
            }}
            disabled={swiperInstance?.isEnd}
            text={<IoIosArrowRoundForward />}
            className={
              "h-12 w-12 flex items-center justify-center border-[2px] text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-black  ease-in-out duration-200 hover:text-white  "
            }
          />
        </div>
      </div>
      <div className="flex relative items-center justify-center p-10   bg-primary_blue rounded-[7px] ">
        <Swiper
          modules={[Navigation]}
          onSwiper={swiper => (swiperInstance = swiper)} // Capture the Swiper instance
          slidesPerView={3} // Number of visible slides
          spaceBetween={20} // Gap between slides
          loop={true} // Enable looping
        >
          {BlogCardData.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <BlogCard
                onClick={() => {
                  handleBlogRedirect(item?.id);
                }}
                blogTxt={item?.cardTxt}
                bgImg={item?.BgImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Image
          Src={blogGift}
          AltTxt={"not found"}
          className={"absolute top-0 left-0 ml-[-170px] "}
        />
        <Image
          Src={blogGiftRight}
          AltTxt={"not found"}
          className={"absolute top-0 right-0 mr-[-185px]  "}
        />
      </div>
    </section>
  );
};

export default BlogSection;
