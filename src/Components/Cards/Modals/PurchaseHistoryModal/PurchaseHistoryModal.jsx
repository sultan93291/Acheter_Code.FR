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
import axios from "axios";
import { useState } from "react";
import { format } from "date-fns";

const PurchaseHistoryModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const [SearchData, setSearchData] = useState();
  const [selectedDate, setSelectedDate] = useState(null);
  const [purchaseProductDetails, setpurchaseProductDetails] = useState([]);
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

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const purchaseItemHeading = [
    "ID",
    "Product",
    "Order Date",
    "Delivery Date",
    "Quantity",
    "Total",
    "Status",
  ];

  const psurchaseProductDetails = [
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

  const handleDateChange = date => {
    const formattedDate = format(date, "yyyy-MM-dd");
    setSelectedDate(formattedDate); // Update the state in the parent
  };

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/users/order-history?product_name=${
        SearchData ? SearchData : "AMAZON"
      }&order_date=${selectedDate ? selectedDate : "2025-01-20"}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => {
        console.log(res.data.data);
        if (res.status === 200) {
          setpurchaseProductDetails(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [setSearchData, selectedDate]);

  const convertUTCToLocal = utcTimestamp => {
    const date = new Date(utcTimestamp);

    const day = String(date.getDate()).padStart(2, "0"); // Add leading zero if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month (1-12), add leading zero
    const year = String(date.getFullYear()).slice(-2); // Get last 2 digits of the year

    return `${day}/${month}/${year}`;
  };

  return (
    <div
      className={`fixed inset-0 h-auto  flex  items-start justify-end z-50 bg-black bg-opacity-50 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      } transition-opacity duration-300 ease-out`}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className=" px-5 overflow-hidden  w-screen md:w-auto  xl:w-[975px] py-10 bg-white border-[1px] border-solid border-light_gray flex flex-col gap-y-10  ">
        <div className="flex flex-row items-center justify-between ">
          <Heading
            dataAos={"fade-in"}
            Variant={"h4"}
            text={"PURCHASE HISTORY"}
            className={"para_style  leading-[164%] text-text_black "}
          />
          <div
            onClick={() => {
              handleClose();
            }}
            className="flex flex-row items-center cursor-pointer gap-x-1 "
          >
            <RxCross2
              data-aos="fade-in"
              className={"para_style leading-none  text-text_black"}
            />
            <Paragraph
              dataAos={"fade-in"}
              text={"CLOSE"}
              className={"para_style leading-none  text-text_black"}
            />
          </div>
        </div>
        <div className="flex flex-col overflow-y-scroll h-[820px] pb-10 gap-y-8 ">
          <div className="flex flex-col gap-y-5 2xl:flex-row justify-between ">
            <div className="w-[265px] relative md:w-auto lg:w-[426px]">
              <Input
                type={"text"}
                className={
                  " w-[265px] relative md:w-auto lg:w-[426px] rounded-[12px] py-[15.5px] pl-[16px] pr-[42px] outline-none border-[1px] border-solid border-text_gray para_style leading-none  text-text_black font-medium  "
                }
                placeholder={"Search products"}
                onChange={e => {
                  setSearchData(e.target.value);
                }}
              />
              <FiSearch className="absolute right-0 mr-[16px] transform -translate-y-1/2 top-1/2 para_style leading-none  text-text_black font-medium cursor-pointer " />
            </div>
            <DatePicker data-aos="fade-in" onDateChange={handleDateChange} />
          </div>
          <div className="flex flex-col gap-y-10 ">
            <div className="flex flex-col gap-y-8">
              <Heading
                dataAos="fade-in"
                Variant={"h4"}
                text={"December, 2024"}
                className={"text-lg font-semibold font-nunito text-[#091E42] "}
              />
              <div className="flex flex-col w-full">
                {purchaseProductDetails.length ? (
                  <>
                    {/* Header Section */}
                    <div className="relative max-w-[700px] overflow-x-scroll flex flex-row justify-between items-center py-5 after:absolute after:w-full after:h-[1px] after:bg-light_gray lg:max-w-full gap-x-[30px] overflow-hidden after:bottom-0 after:left-0 after:mb-[-10px]">
                      {purchaseItemHeading.map((item, index) => (
                        <Paragraph
                          dataAos="fade-in"
                          key={index}
                          text={item}
                          className="text-base text-nowrap sm:text-lg font-semibold font-nunito text-text_black"
                        />
                      ))}
                    </div>

                    {/* Scrollable Product Details Section */}
                    <div className="flex flex-col   gap-y-4 overflow-y-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {purchaseProductDetails.map((item, index) => (
                        <div
                          className={`flex flex-nowrap flex-row relative justify-between items-center after:absolute after:w-full after:h-[1px] max-w-full overflow-x-auto after:border-b-2 gap-x-[30px] after:border-dotted after:border-text_gray after:bottom-0 after:left-0 after:opacity-50 ${
                            index === 0 ? "pt-[30px] pb-[20px]" : "py-5"
                          }`}
                          key={index}
                        >
                          {/* ID */}
                          <Paragraph
                            dataAos="fade-in"
                            text={item.id}
                            className="purchase_product_detils text-nowrap w-[40px] sm:w-[60px] text-sm sm:text-base text-text_black"
                          />

                          {/* Product Name */}
                          <Paragraph
                            dataAos="fade-in"
                            text={item?.order_card[0].card.card_name}
                            className="purchase_product_detils w-[80px] text-nowrap sm:w-[120px] text-sm sm:text-base text-text_black truncate"
                          />

                          {/* Order Date */}
                          <Paragraph
                            dataAos="fade-in"
                            text={convertUTCToLocal(item?.created_at)}
                            className="purchase_product_detils w-[100px] sm:w-[140px] text-sm sm:text-base text-text_black truncate"
                          />

                          {/* Delivery Date */}
                          <Paragraph
                            dataAos="fade-in"
                            text={
                              item?.delivary_date ? item.delivary_date : "hold"
                            }
                            className="purchase_product_detils w-[120px] sm:w-[160px] text-sm sm:text-base text-text_black truncate"
                          />

                          {/* Quantity */}
                          <Paragraph
                            dataAos="fade-in"
                            text={item?.order_card.length}
                            className="purchase_product_detils w-[40px] sm:w-[60px] text-sm sm:text-base text-text_black"
                          />

                          {/* Total Price */}
                          <Paragraph
                            dataAos="fade-in"
                            text={item?.total_price}
                            className="purchase_product_detils w-[40px] sm:w-[80px] text-sm sm:text-base text-text_black"
                          />

                          {/* Status Button */}
                          <Button
                            data-aos="fade-in"
                            text={item?.status}
                            className={`h-auto rounded-[4px] py-1 px-2 sm:w-[76px] w-[60px] text-[10px] sm:text-[12px] font-medium text-primary_gray ${
                              item?.btnTxt === "Pending"
                                ? "bg-[#FFDDB7]"
                                : item.btnTxt === "Cancelled"
                                ? "bg-[#FFAFAF]"
                                : "bg-[#ACFDCE]"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Heading
                    dataAos="fade-in"
                    Variant="h4"
                    text="No order history"
                    className="text-base sm:text-lg font-semibold font-nunito text-[#091E42] mt-6"
                  />
                )}
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
