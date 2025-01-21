import axios from "axios";
import {
  bestsellingCardData,
  upcomingCardData,
} from "../../../DummyData/DummyData";
import SwipperSlider from "../../../SwipperSlider/SwipperSlider";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import { useEffect, useState } from "react";

const VouchersSection = () => {
  const [bestSeliingDatas, setbestSeliingDatas] = useState();
  const [upComingDatas, setUpcomingDatas] = useState();

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const bestSellingData = () => {
    axios({
      method: "get",
      url: `${SiteURl}/api/upcoming-vouchers`,
    })
      .then(res => {
        setbestSeliingDatas(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const upComingData = () => {
    axios({
      method: "get",
      url: `${SiteURl}/api/best-selling-vouchers`,
    })
      .then(res => {
        setUpcomingDatas(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    bestSellingData();
    upComingData();
  }, []);

  return (
    <section className="flex  flex-col w-full h-auto ">
      <div className="  h-auto py-5 2xl:py-10 bg-secondary_blue">
        <div className="w-[250px] md:w-[520px] lg:w-[560px]  2xl:w-[970px] 3xl:w-[1295px] mx-auto flex flex-col ">
          <Heading
            dataAos="fade-in"
            Variant={"h2"}
            text={"SALE VOUCHERS"}
            className={
              "text-white font-righteous text-[24px] lg:text-[26px] 3xl:text-[36px] font-normal"
            }
          />
        </div>
      </div>
      <div className="flex  flex-col  h-auto py-4 2xl:py-8 bg-primary_blue  ">
        <div className="flex flex-col mx-auto py-4 lg:py-8 gap-y-[32px] 2xl:gap-y-[64px]  ">
          <div className="flex flex-col w-[285px] mx-auto  md:w-[560px]  2xl:w-[970px] 3xl:w-[1295px]  gap-y-4 2xl:gap-y-8 items-start lg:items-start  ">
            <Heading
              Variant={"h4"}
              dataAos="fade-in"
              text={"Bestselling Vouchers"}
              className={
                "text-black font-nunito text-[22px] lg:text-[26px] 3xl:text-[32px] font-bold"
              }
            />
            <SwipperSlider
              data={bestSeliingDatas ? bestSeliingDatas : bestsellingCardData}
              cardHeight={"570px"}
              cardName={"Bestselling Vouchers"}
            />
          </div>
          <div className="flex  flex-col items-start gap-y-4 2xl:gap-y-8   ">
            <Heading
              dataAos="fade-in"
              Variant={"h4"}
              text={"Upcoming Vouchers"}
              className={
                "text-black font-nunito text-[22px] lg:text-[26px] 3xl:text-[32px]  font-bold"
              }
            />
            <SwipperSlider
              data={upComingDatas ? upComingDatas : upcomingCardData}
              cardHeight={"570px"}
              cardName={"Upcoming Vouchers"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VouchersSection;
