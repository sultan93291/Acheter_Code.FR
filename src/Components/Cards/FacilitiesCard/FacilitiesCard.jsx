import React from "react";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

const FacilitiesCard = ({ Svg, heading, subHeading }) => {
  return (
    <div className="flex flex-col w-[300px] xs:w-[315px] h-auto px-[16.5px] py-5 bg-card_gray rounded-[16px] gap-y-4  ">
      <Svg data-aos="fade-right" />
      <div className="flex flex-col  gap-y-2">
        <Heading
          dataAos="fade-left"
          Variant={"h5"}
          text={heading}
          className={
            " text-[20px] 2xl:text-2xl font-nunito font-semibold text-white"
          }
        />
        <Paragraph
          dataAos="fade-left"
          text={subHeading}
          className={
            "text-white font-nunito font-medium text-[16px]  2xl:text-lg "
          }
        />
      </div>
    </div>
  );
};

export default FacilitiesCard;
