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
      className="py-20 px-[300px] flex flex-col gap-y-10 "
      style={{
        background: "linear-gradient(0deg, #D9EDF4 0%, #D9EDF4 100%), #F7FBFD",
      }}
    >
      <Heading
        dataAos="fade-in"
        Variant={"h4"}
        text={"WHY OUR PRODUCTS"}
        className={"font-righteous text-heading_black text-[36px] font-normal "}
      />
      <div className="flex flex-row gap-x-5">
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
