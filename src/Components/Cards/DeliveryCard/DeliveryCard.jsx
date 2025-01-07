import { Image } from "@/Components/Tags/Image/Image";
import React, { useState } from "react";
import random from "../../../assets/images/Home/computer.jpeg";
import Heading from "@/Components/Tags/Heading/Heading";

const DeliveryCard = () => {
  const [counterValue, setcounterValue] = useState(1);

  const decreaseCounterValue = () => {
    if (counterValue > 1) {
      setcounterValue(counterValue - 1);
    }
  };

  const increaseCounterValue = () => {
    setcounterValue(counterValue + 1);
  };
  return (
    <div className="flex flex-row h-auto p-[16px] items-center justify-between relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#ADD8E6] after:opacity-50  ">
      <Image
        Src={random}
        AltTxt={"not found"}
        className={"w-[64px] h-[64px] rounded-[8px] "}
      />
      <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-row gap-x-6 ">
          <Heading
            Variant={"h4"}
            text={"Roblox Gift Card 10€ (Email Delivery) "}
            className={" text-lg font-semibold text-text_black font-nunito "}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M4.5 5.5V22.5H19.5V5.5H4.5Z"
              stroke="#FF5630"
              stroke-width="2.2"
              stroke-linejoin="round"
            />
            <path
              d="M10 10.5V17M14 10.5V17M2 5.5H22"
              stroke="#FF5630"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 5.5L9.6445 2.5H14.3885L16 5.5H8Z"
              stroke="#FF5630"
              stroke-width="2.2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-row items-center gap-x-[46px] ">
          <div className="w-[142px] h-[50px] relative border-[1px] rounded-[16px] border-solid border-ocean_blue   flex flex-row ">
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
          <Heading
            text={"2 x 10€ = 20€"}
            Variant={"h4"}
            className={" text-lg font-semibold font-nunito text-[#6B4500] "}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
