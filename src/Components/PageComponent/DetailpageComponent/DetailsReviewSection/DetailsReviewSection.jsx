'use client'
import { useState } from "react";
import Heading from "../../../Tags/Heading/Heading";

const DetailsReviewSection = () => {
  const [isReview, setisReview] = useState(true)
  return (
    <section className="w-full h-auto pt-5 pb-[120px] px-[300px]   ">
      <div className="flex flex-row gap-x-[80px] relative after:absolute after:w-full after:h-[1px] after:bg-[#B3BAC5] after:bottom-0 after:left-0 after:mb-[-16px] ">
        <Heading
          onClick={() => {
            setisReview(true);
          }}
          Variant={"h4"}
          text={"DESCRIPTION"}
          className={`text-2xl font-bold cursor-pointer transition-colors ease-in-out  duration-150  font-nunito ${
            isReview ? "text-orange" : "text-text_black"
          } `}
        />
        <Heading
          onClick={() => {
            setisReview(false);
          }}
          Variant={"h4"}
          text={"REVIEWS"}
          className={`text-2xl font-bold cursor-pointer  font-nunito ${
            !isReview ? "text-orange" : "text-text_black"
          } `}
        />
      </div>
    </section>
  );
};

export default DetailsReviewSection;
