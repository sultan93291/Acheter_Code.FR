"use client";
import React, { useState } from "react";
import { Image } from "../../../Tags/Image/Image";
import roblox from "../../../../assets/images/Home/roblox.png";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import Button from "../../../Tags/Button/Button";
import ShoppingCartModal from "@/Components/Cards/Modals/ShoppingCartModal/ShoppingCartModal";
import { useNavigate } from "react-router-dom";

const GeneralInfo = ({ data }) => {
  const [currentIndex, setcurrentIndex] = useState();
  const [counterValue, setcounterValue] = useState(1);
  const [isopen, setisopen] = useState(false);

  const navigate = useNavigate();

  const decreaseCounterValue = () => {
    if (counterValue > 1) {
      setcounterValue(counterValue - 1);
    }
  };

  const increaseCounterValue = () => {
    setcounterValue(counterValue + 1);
  };

  return (
    <>
      <ShoppingCartModal
        onClose={() => {
          setisopen(false);
        }}
        isOpen={isopen}
      />
      <section className="h-auto px-5   4xl:px-[290px]  py-[60px] flex flex-col gap-y-[25px] lg:gap-y-[50px] 2xl:flex-row gap-x-[80px] 3xl:gap-x-[115.5px] ">
        <Image
          dataAos={"zoom-in"}
          Src={`https://borisdessy.softvencefsd.xyz/${data?.image}`}
          AltTxt={"not found"}
          className={
            " w-auto 2xl:w-[450px]  3xl:w-[558px] h-[250px] xl:h-[350px] 2xl:h-[627px] object-cover rounded-[16px] "
          }
        />
        <div className="flex flex-col gap-y-[38px] mx-auto  ">
          <div className="flex flex-col gap-y-[40px] lg:gap-y-[51px]">
            <div className="flex flex-col gap-y-3 lg:gap-y-6">
              <div className="flex flex-row gap-x-[80px] md:gap-x-[105px] items-center ">
                <Heading
                  dataAos={"fade-in"}
                  className={"details_headings"}
                  Variant={"h6"}
                  text={"Platform:"}
                />
                <Paragraph
                  dataAos={"fade-in"}
                  text={data?.platform_name}
                  className={"details_sub_headings"}
                />
              </div>
              <div className="flex flex-row gap-x-[95px] md:gap-x-[120px] items-center ">
                <Heading
                  dataAos={"fade-in"}
                  className={"details_headings"}
                  Variant={"h6"}
                  text={"Usage:"}
                />
                <Paragraph
                  dataAos={"fade-in"}
                  text={data?.usage}
                  className={"details_sub_headings"}
                />
              </div>
              <div className="flex flex-row gap-x-[80px] md:gap-x-[105px]  items-center  ">
                <Heading
                  dataAos={"fade-in"}
                  className={"details_headings"}
                  Variant={"h6"}
                  text={"Version:"}
                />
                <select
                  className=" w-auto lg:w-[380px] py-[10px] lg:py-[17px] rounded-[12px] px-[16px] outline-none details_sub_headings   "
                  name="version"
                  id="version"
                >
                  {data?.card_countries.map((item, index) => {
                    return (
                      <option dataAos={"fade-in"} key={index} value={item.name}>
                        {" "}
                        {item.name}{" "}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row gap-x-[37px] md:gap-x-[57px] items-center ">
                <Heading
                  dataAos={"fade-in"}
                  className={"details_headings"}
                  Variant={"h6"}
                  text={"Delivery Time:"}
                />
                <Paragraph
                  dataAos={"fade-in"}
                  text={"Instant Deliverable"}
                  className={"details_sub_headings"}
                />
              </div>
              <div className="flex flex-col gap-y-4 ">
                <Heading
                  dataAos={"fade-in"}
                  className={"details_headings"}
                  Variant={"h6"}
                  text={"Available Amount"}
                />
                <div className="flex flex-row flex-wrap  gap-4 w-auto lg:w-[591px] ">
                  {data?.card_avaiale_amounts?.map((item, index) => {
                    return (
                      <div
                        data-aos={"fade-in"}
                        onClick={() => {
                          setcurrentIndex(index);
                        }}
                        key={index}
                        className={` h-auto w-[65px] p-4 rounded-[12px] border-[1px] flex items-center details_sub_headings justify-center ${
                          currentIndex === index
                            ? " bg-light_orange  border-solid border-border_orange  "
                            : "bg-white border-transparent "
                        }   shadow-custom_shadow cursor-pointer ${
                          index === data?.card_avaiale_amounts?.length - 1
                            ? "text-secondary_orange"
                            : ""
                        }  `}
                      >
                        {`${item?.value}€`}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className=" w-auto lg:w-[551px] flex flex-col gap-y-5 rounded-[16px] bg-white shadow-custom_shadow h-auto py-4 lg:py-8 px-5 lg:pl-[46px] pr-[23px]">
            <div className="flex flex-row items-center ">
              <svg
                data-aos={"fade-in"}
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
                dataAos={"fade-in"}
                Variant={"h3"}
                text={`${data?.stock} in stock `}
                className={
                  " text-[20px]  lg:text-2xl text-text_black font-semibold "
                }
              />
            </div>
            <div className="flex lg:flex-row flex-col gap-y-4  gap-x-5 ">
              <div className="w-[142px] relative border-[1px] rounded-[16px] border-solid border-ocean_blue h-auto py-[10px] lg:py-0  flex flex-row ">
                <div
                  onClick={() => {
                    increaseCounterValue();
                  }}
                  className="w-[43px] px-4 relative flex items-center text-lg font-bold font-nunito text-secondary_gray  cursor-pointer"
                >
                  <svg
                    data-aos={"fade-in"}
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
                <div
                  data-aos={"fade-in"}
                  className="w-[59px] border-l-[1px]  border-r-[1px] border-solid border-ocean_blue px-6 flex items-center text-lg font-bold font-nunito text-secondary_gray  "
                >
                  {counterValue}
                </div>
                <div
                  onClick={() => {
                    decreaseCounterValue();
                  }}
                  className="w-[43px] px-4 relative flex items-center text-lg font-bold font-nunito text-secondary_gray cursor-pointer  "
                >
                  <svg
                    data-aos={"fade-in"}
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
                data-aos={"fade-in"}
                onClick={() => {
                  navigate("/checkout");
                }}
                text={"BUY NOW"}
                className={
                  " text-[16px] lg:text-lg rounded-[16px] shadow-btn_shadow bg-orange lg:leading-[164%] font-nunito font-medium text-white py-[5px] lg:py-[10px] lg:px-5 border-[2px] border-solid border-transparent hover:border-orange hover:bg-transparent hover:text-orange ease-in duration-300  "
                }
              />
              <Button
                data-aos={"fade-in"}
                onClick={() => {
                  setisopen(true);
                }}
                text={"ADD TO CART"}
                className={
                  "text-[16px] lg:text-lg rounded-[16px] shadow-btn_shadow bg-transparent border-[2px] border-solid border-orange leading-[164%] font-nunito font-medium text-orange py-[5px] lg:py-[10px] lg:px-5  hover:bg-orange hover:text-white hover:border-transparent "
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneralInfo;
