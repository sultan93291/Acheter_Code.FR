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
    <section className="flex flex-col w-full h-auto ">
      <div className="w-full px-[300px] h-auto py-10 bg-secondary_blue">
        <Heading
          Variant={"h2"}
          text={"SALE VOUCHERS"}
          className={"text-white font-righteous text-[36px] font-normal"}
        />
      </div>
      <div className="flex flex-col px-[300px] h-auto py-8 bg-primary_blue gap-y-[64px]">
        <div className="flex flex-col gap-y-8 ">
          <Heading
            Variant={"h4"}
            text={"Bestselling Vouchers"}
            className={"text-black font-nunito text-[32px] font-bold"}
          />
          <SwipperSlider
            data={bestSeliingDatas ? bestSeliingDatas : bestsellingCardData}
            cardHeight={"570px"}
            cardName={"Bestselling Vouchers"}
          />
        </div>
        <div className="flex flex-col gap-y-8 ">
          <Heading
            Variant={"h4"}
            text={"Upcoming Vouchers"}
            className={"text-black font-nunito text-[32px] font-bold"}
          />
          <SwipperSlider
            data={upComingDatas ? upComingDatas : upcomingCardData}
            cardHeight={"570px"}
            cardName={"Upcoming Vouchers"}
          />
        </div>
      </div>
    </section>
  );
};

export default VouchersSection;
