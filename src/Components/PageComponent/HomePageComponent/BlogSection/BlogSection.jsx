import React, { useEffect, useState, useRef } from "react";
import Heading from "../../../Tags/Heading/Heading";
import Button from "../../../Tags/Button/Button";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "../../../Cards/BlogCard/BlogCard";
import blogGift from "../../../../assets/images/Home/blog_gift.png";
import blogGiftRight from "../../../../assets/images/Home/blog_gift_right.png";
import { Image } from "../../../Tags/Image/Image";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BlogSection = () => {
  const swiperRef = useRef(null); // Ref for Swiper instance
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [slidePreview, setSlidePreview] = useState(1);
  const [BlogDataArr, setBlogDataArr] = useState([]);

  const SiteURL = import.meta.env.VITE_SITE_URL;
  const navigate = useNavigate();

  const handleBlogRedirect = id => {
    navigate(`blog/${id}`);
  };

  // Fetch blog data
  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURL}/api/all/blogs`,
    })
      .then(res => {
        setBlogDataArr(res.data.data);
      })
      .catch(err => {
        console.error("Error fetching blog data:", err);
      });
  }, [SiteURL]);

  // Handle dynamic slide preview based on screen size
  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth <= 480) {
      setSlidePreview(1);
    } else if (innerWidth > 768 && innerWidth <= 1212) {
      setSlidePreview(2);
    } else if (innerWidth > 1213) {
      setSlidePreview(3);
    }
  }, [innerWidth]);

  return (
    <section className="w-full py-10 3xl:py-20 px-8 4xl:px-[290px]     relative flex flex-col gap-y-10">
      <div className="flex flex-col md:flex-row justify-between  md:items-start gap-y-6">
        <Heading
          Variant={"h4"}
          text={"READ OUR BLOGS"}
          dataAos={"fade-in"}
          className="font-righteous text-heading_black text-2xl md:text-3xl lg:text-4xl font-normal  md:text-left"
        />
        <div className="flex flex-row items-center gap-x-3">
          {/* Previous Slide Button */}
          <Button
            onClick={() => swiperRef.current?.slidePrev()}
            text={<IoIosArrowRoundBack />}
            className="h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center border-[2px] text-lg lg:text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-black ease-in-out duration-200 hover:text-white"
          />
          {/* Next Slide Button */}
          <Button
            onClick={() => swiperRef.current?.slideNext()}
            text={<IoIosArrowRoundForward />}
            className="h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center border-[2px] text-lg lg:text-2xl border-solid border-black rounded-full text-black hover:border-transparent hover:bg-black ease-in-out duration-200 hover:text-white"
          />
        </div>
      </div>
      <div className="relative flex items-center justify-center p-4 md:p-6 bg-primary_blue rounded-[7px]">
        <Swiper
          modules={[Navigation]}
          onSwiper={swiper => (swiperRef.current = swiper)} // Set Swiper instance in ref
          slidesPerView={slidePreview} // Dynamic slide preview
          spaceBetween={20}
          loop={true}
        >
          {BlogDataArr.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <BlogCard
                onClick={() => handleBlogRedirect(item?.id)}
                blogTxt={item?.title}
                bgImg={`${SiteURL}/${item.image}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Decorative Images */}
        <Image
          Src={blogGift}
          AltTxt={"not found"}
          className="absolute hidden 4xl:flex top-0 left-0 ml-[-170px]"
        />
        <Image
          Src={blogGiftRight}
          AltTxt={"not found"}
          className="absolute hidden 4xl:flex top-0 right-0 mr-[-185px]"
        />
      </div>
    </section>
  );
};

export default BlogSection;
