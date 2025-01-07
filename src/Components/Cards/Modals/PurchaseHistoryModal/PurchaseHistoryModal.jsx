"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import { RxCross2 } from "react-icons/rx";
import { Input } from "../../../Tags/Input/Input";
import { FiSearch } from "react-icons/fi";
import { DatePicker } from "../../DatePicker/DatePicker";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "@/Components/Tags/Button/Button";
import { FaEye } from "react-icons/fa";
import { PaginationDemo } from "../../PaginationCard/PaginationCard";

const PurchaseHistoryModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

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

  const purchaseItemHeading = [
    "ID",
    "Product",
    "Order Date",
    "Delivery Date",
    "Quantity",
    "Total",
    "Status",
    "View",
    "Action",
  ];

  const purchaseProductDetails = [
    {
      productId: "4202",
      productName: "Roblox",
      orderDate: "12/16/2024",
      deliveryData: "12/29/2024",
      quantity: "02",
      price: "20€",
      status: "20€",
      view: FaEye,
      action: FaRegTrashAlt,
      btnTxt: "Pending",
    },
    {
      productId: "4202",
      productName: "Roblox",
      orderDate: "12/16/2024",
      deliveryData: "12/29/2024",
      quantity: "02",
      price: "20€",
      status: "20€",
      view: FaEye,
      action: FaRegTrashAlt,
      btnTxt: "Cancelled",
    },
    {
      productId: "4202",
      productName: "Roblox",
      orderDate: "12/16/2024",
      deliveryData: "12/29/2024",
      quantity: "02",
      price: "20€",
      status: "20€",
      view: FaEye,
      action: FaRegTrashAlt,
      btnTxt: "Completed",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      // Cleanup in case the component unmounts
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 h-[950px] flex  items-start justify-end z-50 bg-black bg-opacity-50 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      } transition-opacity duration-300 ease-out`}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className=" px-5 py-10 bg-white border-[1px] border-solid border-light_gray flex flex-col gap-y-10  ">
        <div className="flex flex-row items-center justify-between ">
          <Heading
            Variant={"h4"}
            text={"PURCHASE HISTORY"}
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
        <div className="flex flex-col overflow-y-scroll h-[820px] gap-y-8 ">
          <div className="flex flex-row justify-between ">
            <div className="relative">
              <Input
                type={"text"}
                className={
                  "w-[426px] rounded-[12px] py-[15.5px] pl-[16px] pr-[42px] outline-none border-[1px] border-solid border-text_gray para_style leading-none  text-text_black font-medium  "
                }
                placeholder={"Search products"}
              />
              <FiSearch className="absolute right-0 mr-[16px] transform -translate-y-1/2 top-1/2 para_style leading-none  text-text_black font-medium cursor-pointer " />
            </div>
            <DatePicker />
          </div>
          <div className="flex flex-col gap-y-10 ">
            <div className="flex flex-col gap-y-8">
              <Heading
                Variant={"h4"}
                text={"December, 2024"}
                className={"text-lg font-semibold font-nunito text-[#091E42] "}
              />
              <div className="flex flex-col ">
                <div className="relative flex flex-row justify-between h-auto py-5 after:absolute after:w-full after:h-[1px] after:bg-light_gray after:bottom-0 after:left-0 after:mb-[-10px] items-center">
                  {purchaseItemHeading.map((item, index) => {
                    return (
                      <Paragraph
                        key={index}
                        text={item}
                        className={
                          "text-lg font-semibold font-nunito text-text_black"
                        }
                      />
                    );
                  })}
                </div>

                {purchaseProductDetails.map((item, index) => {
                  return (
                    <div
                      className={`flex flex-row relative  gap-x-[47.5px] h-auto  after:absolute  items-center after:w-full after:h-[1px] after:border-b-2 after:border-dotted after:border-text_gray after:bottom-0 after:left-0  after:opacity-50 ${
                        index === 0 ? "pt-[30px] pb-[20px]" : "py-5"
                      } `}
                      key={index}
                    >
                      <Paragraph
                        text={item?.productId}
                        className={"purchase_product_detils w-[21px]  "}
                      />
                      <Paragraph
                        text={item?.productName}
                        className={"purchase_product_detils w-[62px]  "}
                      />
                      <Paragraph
                        text={item?.orderDate}
                        className={"purchase_product_detils w-[92px]  "}
                      />
                      <Paragraph
                        text={item?.deliveryData}
                        className={"purchase_product_detils w-[110px]"}
                      />
                      <Paragraph
                        text={item?.quantity}
                        className={"purchase_product_detils w-[70px] "}
                      />
                      <Paragraph
                        text={item?.price}
                        className={"purchase_product_detils"}
                      />
                      <Button
                        text={item?.btnTxt}
                        className={`h-auto rounded-[4px] py-1 w-[96px] text-[16px] font-medium text-primary_gray ${
                          item?.btnTxt === "Pending"
                            ? "bg-[#FFDDB7]"
                            : item.btnTxt === "Cancelled"
                            ? "bg-[#FFAFAF]"
                            : "bg-[#ACFDCE]"
                        } `}
                      />
                      <item.view className="cursor-pointer purchase_product_detils w-[20px] " />
                      <item.action className="cursor-pointer purchase_product_detils text-[#FF5630] " />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <Heading
                Variant={"h4"}
                text={"December, 2024"}
                className={"text-lg font-semibold font-nunito text-[#091E42] "}
              />
              <div className="flex flex-col ">
                <div className="relative flex flex-row justify-between h-auto py-5 after:absolute after:w-full after:h-[1px] after:bg-light_gray after:bottom-0 after:left-0 after:mb-[-10px] items-center">
                  {purchaseItemHeading.map((item, index) => {
                    return (
                      <Paragraph
                        key={index}
                        text={item}
                        className={
                          "text-lg font-semibold font-nunito text-text_black"
                        }
                      />
                    );
                  })}
                </div>

                {purchaseProductDetails.map((item, index) => {
                  return (
                    <div
                      className={`flex flex-row relative  gap-x-[47.5px] h-auto  after:absolute  items-center after:w-full after:h-[1px] after:border-b-2 after:border-dotted  after:bottom-0 after:left-0  after:opacity-50  ${
                        index === 2
                          ? "after:border-transparent"
                          : "after:border-text_gray"
                      }  ${index === 0 ? "pt-[30px] pb-[20px]" : "py-5"} `}
                      key={index}
                    >
                      <Paragraph
                        text={item?.productId}
                        className={"purchase_product_detils w-[21px]  "}
                      />
                      <Paragraph
                        text={item?.productName}
                        className={"purchase_product_detils w-[62px]  "}
                      />
                      <Paragraph
                        text={item?.orderDate}
                        className={"purchase_product_detils w-[92px]  "}
                      />
                      <Paragraph
                        text={item?.deliveryData}
                        className={"purchase_product_detils w-[110px]"}
                      />
                      <Paragraph
                        text={item?.quantity}
                        className={"purchase_product_detils w-[70px] "}
                      />
                      <Paragraph
                        text={item?.price}
                        className={"purchase_product_detils"}
                      />
                      <Button
                        text={item?.btnTxt}
                        className={`h-auto rounded-[4px] py-1 w-[96px] text-[16px] font-medium text-primary_gray ${
                          item?.btnTxt === "Pending"
                            ? "bg-[#FFDDB7]"
                            : item.btnTxt === "Cancelled"
                            ? "bg-[#FFAFAF]"
                            : "bg-[#ACFDCE]"
                        } `}
                      />
                      <item.view className="cursor-pointer purchase_product_detils w-[20px] " />
                      <item.action className="cursor-pointer purchase_product_detils text-[#FF5630] " />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <PaginationDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryModal;
