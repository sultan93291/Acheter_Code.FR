import React from "react";
import Heading from "../../Tags/Heading/Heading";
import Paragraph from "../../Tags/Paragraph/Paragraph";

const FacilitiesCard = ({ Svg, heading, subHeading }) => {
  return (
    <div className="flex flex-col w-[315px] h-auto px-[16.5px] py-5 bg-card_gray rounded-[16px] gap-y-4  ">
      <Svg />
      <div className="flex flex-col gap-y-2">
        <Heading
          Variant={"h5"}
          text={heading}
          className={" text-2xl font-nunito font-semibold text-white"}
        />
        <Paragraph
          text={subHeading}
          className={"text-white font-nunito font-medium text-lg "}
        />
      </div>
    </div>
  );
};

export default FacilitiesCard;
