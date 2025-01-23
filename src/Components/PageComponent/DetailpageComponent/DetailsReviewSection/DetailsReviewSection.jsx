"use client";
import { useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import DetailsSection from "../DetailsSection/DetailsSection";
import ReviewSection from "../ReviewSection/ReviewSection";



const DetailsReviewSection = ({data}) => {
  const [isDescreption, setisDescreption] = useState(true);
console.log('details review section' , data);
  
  
  return (
    <section
      className={`w-full h-auto pt-5 ${
        isDescreption
          ? "2xl:pb-[120px] pb-[50px] "
          : " pb-[50px] 2xl:pb-[140px]"
      }   4xl:px-[290px]  `}
    >
      <div className=" flex flex-row px-5 justify-between  xl:px-10 2xl:px-16 4xl:px-0  xl:gap-x-[80px] relative after:absolute after:w-full after:h-[1px] after:bg-[#B3BAC5] after:bottom-0 after:left-0 after:mb-[-16px] ">
        <Heading
          dataAos={"fade-in"}
          onClick={() => {
            setisDescreption(true);
          }}
          Variant={"h4"}
          text={"DESCRIPTION"}
          className={` text-[18px] lg:text-2xl  font-bold cursor-pointer transition-colors ease-in-out  duration-150  font-nunito ${
            isDescreption ? "text-orange" : "text-text_black"
          } `}
        />
        <Heading
          dataAos={"fade-in"}
          onClick={() => {
            setisDescreption(false);
          }}
          Variant={"h4"}
          text={"REVIEWS"}
          className={`text-[18px] lg:text-2xl font-bold cursor-pointer  font-nunito ${
            !isDescreption ? "text-orange" : "text-text_black"
          } `}
        />
      </div>
      <div className={` ${isDescreption ? "pt-[42px]  " : "pt-[34px]"} `}>
        {
          isDescreption ? <DetailsSection Data={data} /> : 
          <ReviewSection data={data} />
        }
      </div>
    </section>
  );
};

export default DetailsReviewSection;
