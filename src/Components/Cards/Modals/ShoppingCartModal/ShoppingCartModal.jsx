"use client";
import React, { useEffect, useRef } from "react";
import Heading from "../../../Tags/Heading/Heading";
import Paragraph from "../../../Tags/Paragraph/Paragraph";
import { RxCross2 } from "react-icons/rx";
import DeliveryCard from "../../DeliveryCard/DeliveryCard";
import Button from "@/Components/Tags/Button/Button";

const ShoppingCartModal = ({ isOpen, onClose }) => {
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
      className={`absolute inset-0 h-[955px] flex  items-start justify-end z-50 bg-black bg-opacity-50 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      } transition-opacity duration-300 ease-out`}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div
        ref={elementRef}
        className="  pt-6 pb-5 px-6 w-[530px] bg-white border-[1px] border-solid border-light_gray flex flex-col gap-y-6  "
      >
        <div className="flex flex-row items-center justify-between ">
          <Heading
            Variant={"h4"}
            text={" SHOPPING CART"}
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
        <div className="flex flex-col gap-y-[220px]">
          <div className="flex flex-col">
            <DeliveryCard />
            <DeliveryCard />
            <DeliveryCard />
          </div>
          <div className="relative flex flex-col items-center gap-y-8 after:absolute after:w-full after:h-[1px] after:bg-text_gray after:top-0 after:left-0 after:mt-[-20px]">
            <div className="flex flex-row justify-between w-full">
              <Heading
                text={"SUBTOTAL"}
                Variant={"h5"}
                className={"text-lg font-nunito font-semibold  text-text_black"}
              />
              <Heading
                text={"80€"}
                Variant={"h5"}
                className={"text-lg font-nunito font-semibold  text-text_black"}
              />
            </div>
            <Button
              className={
                "w-[450px] bg-orange py-[16px] px-5 rounded-[16px] h-[57px] text-lg font-nunito text-white "
              }
              text={"CHECKOUT"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartModal;
