import React from "react";
import Heading from "../../../Tags/Heading/Heading";
import FacilitiesCard from "../../../Cards/FacilitiesCard/FacilitiesCard";
import {
  CheckIcon,
  SupportIcon,
  DollarIcon,
  EmailDeliveryIcon,
} from "../../../Svg/Svg";

const OurProductSection = () => {
  const FacilitiesCardInfo = [
    {
      svg: CheckIcon,
      heading: "Secured Online Payments",
      subHeading: "For purchasing with safety",
    },
    {
      svg: SupportIcon,
      heading: "24/7 Support",
      subHeading: "For any kind of your problems",
    },
    {
      svg: DollarIcon,
      heading: "Reasonable Prices",
      subHeading: "For purchasing your favourites",
    },
    {
      svg: EmailDeliveryIcon,
      heading: "Instant Email Delivery",
      subHeading: "For approved customers",
    },
  ];
  return (
    <section
      className=" py-10 3xl:py-20 px-5 4xl:px-[290px] flex flex-col gap-y-10 "
      style={{
        background: "linear-gradient(0deg, #D9EDF4 0%, #D9EDF4 100%), #F7FBFD",
      }}
    >
      <div className="w-[285px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px]">
        <Heading
          dataAos="fade-in"
          Variant={"h4"}
          text={"WHY OUR PRODUCTS"}
          className={
            "font-righteous text-heading_black text-[24px] lg:text-[26px] 3xl:text-[36px]  font-normal "
          }
        />
      </div>
      <div className="flex flex-row items-center justify-center 2xl:items-start 2xl:justify-start w-full 3xl:justify-none 3xl:items-start 4xl:flex-nowrap flex-wrap gap-5">
        {FacilitiesCardInfo.map((item, index) => (
          <FacilitiesCard
            key={index}
            heading={item.heading}
            subHeading={item.subHeading}
            Svg={item.svg}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProductSection;
