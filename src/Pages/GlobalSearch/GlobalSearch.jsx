"use client";
import SwipperSlider from "@/Components/SwipperSlider/SwipperSlider";
import Heading from "@/Components/Tags/Heading/Heading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fetechingDataName = [
  "Steam",
  "Google Store ",
  "Apple Store",
  "Playstation",
  "Fortnite",
  "Roblox",
  "Minecraft",
  "Xbox",
];

const GlobalSearch = () => {
  const [fetechedDataName, setfetechedDataName] = useState("Steam");
  const [SearchedCardData, setSearchedCardData] = useState([]);

  const location = useLocation();

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");
  const SiteURl = import.meta.env.VITE_SITE_URL;

  console.log(filter);

  const setFetehingDataName = dataName => {
    // Update the state
    setfetechedDataName(dataName);
    // Use `dataName` directly in the API call
    axios({
      method: "get",
      url: `${SiteURl}/api/filter/cards?platform=${dataName}`, // Use dataName
    })
      .then(res => {
        console.log(res?.data?.data);
        setSearchedCardData(res?.data?.data); // Set the fetched data
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Call setFetehingDataName with the initial state value on mount
  useEffect(() => {
    setFetehingDataName(fetechedDataName);
  }, []);

  return (
    <section className="bg-[#F8F8F8]">
      <div className=" pt-[57px] pb-[50px] lg:pb-[123px] flex px-5 flex-col relative gap-y-8 lg:gap-y-16 3xl:w-[1330px] mx-auto ">
        <div className="flex flex-col   gap-y-8 items-center">
          <div className="flex flex-row  gap-x-2 items-center  ">
            <Heading
              Variant="h3"
              text={"Search Results:"}
              className={
                "text-[20px] 2xl:text-[30px] 4xl:text-[40px] font-medium text-[#5C5C5C] font-nunito leading-[150%] secondary_gray "
              }
            />
            <Heading
              Variant="h3"
              text={`${filter ? filter : "Gift Cards"}`}
              className={
                " text-[20px] 2xl:text-[30px] 3xl:text-[40px] font-bold text-[#253858] font-nunito leading-[150%] secondary_gray "
              }
            />
          </div>
          <div className="p-3 flex flex-row flex-wrap 3xl:flex-nowrap justify-between 4xl:justify-normal   h-auto w-full bg-white shadow-custom_shadow rounded-[12px] ">
            {fetechingDataName.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setFetehingDataName(item);
                  }}
                  className={` py-2 3xl:py-4  text-[14px] 2xl:text-[20px] cursor-pointer ease-in duration-150  leading-[150%] font-medium  rounded-[16px] px-[15px] 3xl:px-[30px]  flex border-[1px]   flex-row items-center text-nowrap justify-between uppercase ${
                    item === fetechedDataName
                      ? "bg-[#FFF6E6] border-solid border-orange text-orange "
                      : " text-[#5c5c5c] border-transparent"
                  }`}
                  key={index}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <SwipperSlider
            data={SearchedCardData}
            cardHeight={"532px"}
            cardName={"gift card"}
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalSearch;
