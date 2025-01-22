import React from "react";
import { Image } from "../../Tags/Image/Image";
import vr from "../../../assets/images/Home/vr.jpeg";
import Paragraph from "../../Tags/Paragraph/Paragraph";

const BlogCard = ({ bgImg, blogTxt, onClick }) => {
  return (
    <div
      onClick={onClick}
      className=" cursor-pointer 4xl:w-[400px] relative h-auto rounded-[16px] flex flex-col"
    >
      <Image
        dataAos={"zoom-in"}
        Src={bgImg}
        className={"w-full  h-[240px] object-cover rounded-t-[16px] "}
      />
      <div className="flex p-5 bg-white rounded-b-[16px] ">
        <Paragraph
          dataAos={"fade-in"}
          className={
            "text-text_orange text-lg font-nunito font-semibold leading-[150%] "
          }
          text={blogTxt}
        />
      </div>
    </div>
  );
};

export default BlogCard;
