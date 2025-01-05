"use client";
import React, { useState } from "react";
import { Image } from "../../../Tags/Image/Image";
import roblox from "../../../../assets/images/Home/roblox.png";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import Button from "../../../Tags/Button/Button";

const GeneralInfo = () => {
  const [currentIndex, setcurrentIndex] = useState();
  const [counterValue, setcounterValue] = useState(1);

  const availableAmount = [
    "1€",
    "2€",
    "3€",
    "4€",
    "5€",
    "10€",
    "11€",
    "15€",
    "20€",
    "25€",
    "30€",
    "35€",
    "40€",
    "+11",
  ];

  const decreaseCounterValue = () => {
    if (counterValue > 1) {
      setcounterValue(counterValue - 1);
    }
  };

  const increaseCounterValue = () => {
    setcounterValue(counterValue + 1);
  };

  return (
    <section className="h-auto   px-[300px]  py-[60px] flex flex-row gap-x-[115.5px] ">
      <Image
        Src={roblox}
        AltTxt={"not found"}
        className={" w-[558px] h-[627px] object-cover rounded-[16px] "}
      />
      <div className="flex flex-col gap-y-[38px]">
        <div className="flex flex-col gap-y-[51px]">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-row gap-x-[105px] items-center ">
              <Heading
                className={"details_headings"}
                Variant={"h6"}
                text={"Platform:"}
              />
              <Paragraph text={"Roblox"} className={"details_sub_headings"} />
            </div>
            <div className="flex flex-row gap-x-[120px] items-center ">
              <Heading
                className={"details_headings"}
                Variant={"h6"}
                text={"Usage:"}
              />
              <Paragraph text={"Global"} className={"details_sub_headings"} />
            </div>
            <div className="flex flex-row gap-x-[105px] items-center  ">
              <Heading
                className={"details_headings"}
                Variant={"h6"}
                text={"Version:"}
              />
              <select
                className=" w-[380px] py-[17px] rounded-[12px] px-[16px] outline-none details_sub_headings   "
                name="version"
                id="version"
              >
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="itally">Itally</option>
                <option value="germam">Germany</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-row gap-x-[57px] items-center ">
              <Heading
                className={"details_headings"}
                Variant={"h6"}
                text={"Delivery Time:"}
              />
              <Paragraph
                text={"Instant Deliverable"}
                className={"details_sub_headings"}
              />
            </div>
            <div className="flex flex-col gap-y-4 ">
              <Heading
                className={"details_headings"}
                Variant={"h6"}
                text={"Available Amount"}
              />
              <div className="flex flex-row flex-wrap  gap-4 w-[591px] ">
                {availableAmount.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setcurrentIndex(index);
                      }}
                      key={index}
                      className={` h-auto w-[65px] p-4 rounded-[12px] border-[1px] flex items-center details_sub_headings justify-center ${
                        currentIndex === index
                          ? " bg-light_orange  border-solid border-border_orange  "
                          : "bg-white border-transparent "
                      }   shadow-custom_shadow cursor-pointer ${
                        index === availableAmount.length - 1
                          ? "text-secondary_orange"
                          : ""
                      }  `}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[551px] flex flex-col gap-y-5 rounded-[16px] bg-white shadow-custom_shadow h-auto py-8 pl-[46px] pr-[23px]">
          <div className="flex flex-row items-center ">
            <svg
              className="pt-2"
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                d="M23.9785 7.5L26.5665 9.31545L15.3455 25.5H12.7575L6.5 16.7318L9.08798 14.3176L14.0515 18.9528L23.9785 7.5Z"
                fill="#1DB435"
              />
            </svg>
            <Heading
              Variant={"h3"}
              text={"550 in stock"}
              className={"text-2xl text-text_black font-semibold "}
            />
          </div>
          <div className="flex flex-row gap gap-x-5 ">
            <div className="w-[142px] relative border-[1px] rounded-[16px] border-solid border-ocean_blue h-auto  flex flex-row ">
              <div
                onClick={() => {
                  increaseCounterValue();
                }}
                className="w-[43px] px-4 relative flex items-center text-lg font-bold font-nunito text-secondary_gray  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                >
                  <path
                    d="M4.96311 11V6.42418H0.5V4.44057H4.96311V0H7.03689V4.44057H11.5V6.42418H7.03689V11H4.96311Z"
                    fill="#5C5C5C"
                  />
                </svg>
              </div>
              <div className="w-[59px] border-l-[1px]  border-r-[1px] border-solid border-ocean_blue px-6 flex items-center text-lg font-bold font-nunito text-secondary_gray  ">
                {counterValue}
              </div>
              <div
                onClick={() => {
                  decreaseCounterValue();
                }}
                className="w-[43px] px-4 relative flex items-center text-lg font-bold font-nunito text-secondary_gray cursor-pointer  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="2"
                  viewBox="0 0 11 2"
                  fill="none"
                >
                  <path d="M0.5 2V0H10.5V2H0.5Z" fill="#5C5C5C" />
                </svg>
              </div>
            </div>
            <Button
              text={"BUY NOW"}
              className={
                "text-lg rounded-[16px] shadow-btn_shadow bg-orange leading-[164%] font-nunito font-medium text-white py-[10px] px-5 "
              }
            />
            <Button
              text={"ADD TO CART"}
              className={
                "text-lg rounded-[16px] shadow-btn_shadow bg-transparent border-[1px] border-solid border-orange leading-[164%] font-nunito font-medium text-orange py-[10px] px-5 "
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
