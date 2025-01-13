"use client";
import { useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import DetailsSection from "../DetailsSection/DetailsSection";
import ReviewSection from "../ReviewSection/ReviewSection";
import { useParams } from "react-router-dom";


const DetailsReviewSection = () => {
  const [isDescreption, setisDescreption] = useState(true);
  console.log(isDescreption);
  const { id } = useParams()
  console.log(id);
  
  
  return (
    <section
      className={`w-full h-auto pt-5 ${
        isDescreption ? "pb-[120px]" : "pb-[140px]"
      } px-[290px]`}
    >
      <div className=" flex flex-row gap-x-[80px] relative after:absolute after:w-full after:h-[1px] after:bg-[#B3BAC5] after:bottom-0 after:left-0 after:mb-[-16px] ">
        <Heading
          onClick={() => {
            setisDescreption(true);
          }}
          Variant={"h4"}
          text={"DESCRIPTION"}
          className={`text-2xl font-bold cursor-pointer transition-colors ease-in-out  duration-150  font-nunito ${
            isDescreption ? "text-orange" : "text-text_black"
          } `}
        />
        <Heading
          onClick={() => {
            setisDescreption(false);
          }}
          Variant={"h4"}
          text={"REVIEWS"}
          className={`text-2xl font-bold cursor-pointer  font-nunito ${
            !isDescreption ? "text-orange" : "text-text_black"
          } `}
        />
      </div>
      <div className={` ${isDescreption ? "pt-[42px]" : "pt-[34px]"} `}>
        {isDescreption ? <DetailsSection /> : <ReviewSection />}
      </div>
    </section>
  );
};

export default DetailsReviewSection;
