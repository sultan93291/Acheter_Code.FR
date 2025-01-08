"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import { RxCross2 } from "react-icons/rx";
import DeliveryCard from "../../DeliveryCard/DeliveryCard";
import Button from "@/Components/Tags/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { VisaIcon } from "@/Components/Svg/Svg";




const AddFundModal = ({ isFundOpen, onFundClose }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    if (onFundClose) {
      onFundClose();
    }
  };

  const transictionHistoryHedings = [
    "Date & Time",
    "Transaction No.",
    "Trans. Type",
    "Card Type",
    "Amount",
  ];

  const transitionHistoryData = [
    {
      date: "12/13/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€10.00",
    },
    {
      date: "12/18/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€200.00",
    },
    {
      date: "12/23/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€10.00",
    },
    {
      date: "12/29/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€200.00",
    },
    {
      date: "12/13/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€10.00",
    },
    {
      date: "12/18/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€200.00",
    },
    {
      date: "12/23/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€10.00",
    },
    {
      date: "12/29/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€200.00",
    },
    {
      date: "12/23/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€10.00",
    },
    {
      date: "12/29/2024",
      transictionNo: "2310040003",
      transictionType: "Purchase",
      cardType: VisaIcon,
      amount: "€200.00",
    },
  ];

  const elementRef = useRef(null);

  useEffect(() => {
    // Function to handle the outside click event
    function handleClickOutside(event) {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        handleClose(); // Close the element if clicked outside
      }
    }

    // Attach the event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isFundOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      // Cleanup in case the component unmounts
      document.body.classList.remove("overflow-hidden");
    };
  }, [isFundOpen]);

  const handleCheckOutRedirect = () => {
    navigate("/checkout");
  };

  return createPortal(
    <div
      className={`fixed top-0 right-0 h-[955px] w-auto flex items-start z-50 bg-black bg-opacity-50 ${
        isFundOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      } transition-opacity duration-300 ease-out`}
      style={{ display: isFundOpen ? "flex" : "none" }}
    >
      <div
        ref={elementRef}
        className="  pt-[44px] pb-5 px-5 w-[838px] bg-white border-[1px] border-solid border-light_gray flex flex-col gap-y-10  "
      >
        <div className="flex flex-row items-center justify-between ">
          <Heading
            Variant={"h4"}
            text={" ADD FUNDS"}
            className={"para_style leading-[164%] text-text_black "}
          />
          <div
            onClick={() => {
              handleClose();
            }}
            className="flex flex-row items-center cursor-pointer gap-x-1 "
          >
            <RxCross2 className={"para_style leading-none  text-text_black"} />
            <Paragraph
              text={"CLOSE"}
              className={"para_style leading-none  text-text_black"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[64px]">
          <div className="flex flex-col items-center gap-y-8">
            <div className="flex flex-col items-center gap-y-3">
              <Heading
                text={"Your current balance"}
                Variant={"h6"}
                className={
                  "  text-[20px] leading-[160%] text-text_black font-nunito font-semibold  "
                }
              />
              <Heading
                text={"7,500€"}
                Variant={"h2"}
                className={
                  " text-[56px]  text-[#04212A] font-nunito font-semibold "
                }
              />
            </div>
            <Button
              onClick={() => {
                handleCheckOutRedirect();
              }}
              className={
                "w-[760px] bg-orange py-[16px] px-5 rounded-[16px] h-[57px] text-lg font-nunito text-white "
              }
              text={"ADD FUNDS (€) "}
            />
          </div>
          <div className="flex flex-col gap-y-3 ">
            <Heading
              text={"Transaction history"}
              Variant={"h6"}
              className={
                "  text-[20px] p-[10px] leading-[180%] text-text_black font-nunito font-semibold  "
              }
            />
            <div className="w-[790px] h-auto px-5 rounded-[16px] py-3 bg-white shadow-custom_shadow  ">
              <div className="flex flex-row justify-between relative after:absolute after:h-[1px] after:w-full after:bg-[#253858] after:bottom-0 after:left-0 after:mb-[-18px] ">
                {transictionHistoryHedings.map((item, index) => {
                  return (
                    <Heading
                      key={index}
                      text={item}
                      Variant={"h3"}
                      className={
                        "  text-[18px] leading-[180%] text-text_black font-nunito font-semibold  "
                      }
                    />
                  );
                })}
              </div>
              <div className="mt-[18px] h-[500px] pb-[50px] overflow-y-scroll ">
                {transitionHistoryData.map((item, index) => {
                  const CardIcon = item.cardType; // Assign the component to a variable
                  return (
                    <div
                      key={index}
                      className="flex flex-row py-6 gap-x-[95px] relative after:absolute "
                    >
                      <Heading
                        text={item.date}
                        Variant="h3"
                        className="text-[18px] leading-[180%] text-text_black font-nunito font-semibold  after:absolute  items-center after:w-full after:h-[1px] after:border-b-2 after:border-dotted  after:bottom-0 after:left-0  after:opacity-50 after:border-text_gray  "
                      />
                      <Heading
                        text={item.transictionNo}
                        Variant="h3"
                        className="text-[18px] leading-[180%] text-text_black font-nunito font-semibold"
                      />
                      <Heading
                        text={item.transictionType}
                        Variant="h3"
                        className="text-[18px] leading-[180%] text-text_black font-nunito font-semibold"
                      />
                      {CardIcon && <CardIcon className=" w-[50px] " />}{" "}
                      <div className="flex flex-row items-start w-[80px] ">
                        <Heading
                          text={item.amount}
                          Variant="h3"
                          className="text-[18px]   leading-[180%] text-text_black font-nunito font-semibold"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddFundModal;