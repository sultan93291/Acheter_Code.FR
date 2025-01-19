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
import { upcomingCardData } from "@/Components/DummyData/DummyData";

const ShoppingCartModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const dispatch = useDispatch();

  const shoppingCartData = useSelector(
    state => state?.cartSlice?.shoppingCartData
  );

  const subtotalArr = [];

  const SUBTOTAL = shoppingCartData?.map((item, index) => {
    const { price, quantity } = item;
    const total = price * quantity;
    subtotalArr.push(total);
  });

  const total = subtotalArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const formattedTotal = total.toFixed(2);

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

  const handleCheckOutRedirect = () => {
    navigate("/checkout");
  };

  return createPortal(
    <div
      className={`fixed top-0 right-0 h-[100vh] w-auto flex items-start z-50   ${
        isOpen
          ? "bg-opacity-100 visible "
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
        <div className="flex flex-col gap-y-[170px]">
          {shoppingCartData.length ? (
            <div className="flex flex-col overflow-y-scroll h-[536px]  ">
              {shoppingCartData?.map((item, index) => {
                return (
                  <DeliveryCard
                    key={index}
                    heading={item?.heading}
                    cartImg={item?.cartImg}
                    quantity={item?.quantity}
                    price={item?.price}
                    id={item?.id}
                    isShoppingCart={true}
                    isHrLine={
                      item?.id !==
                      shoppingCartData[shoppingCartData.length - 1]?.id
                    }
                  />
                );
              })}
            </div>
          ) : (
            <Paragraph
              text={"Nothing to show in cart"}
              className={"para_style leading-none  text-text_black"}
            />
          )}
          <div className="relative flex flex-col items-center gap-y-8  after:absolute after:w-full after:h-[1px] after:bg-text_gray after:top-0 after:left-0 after:mt-[-20px]">
            <div className="flex flex-row justify-between w-full">
              <Heading
                text={"SUBTOTAL"}
                Variant={"h5"}
                className={"text-lg font-nunito font-semibold  text-text_black"}
              />
              <Heading
                text={`${formattedTotal}€`}
                Variant={"h5"}
                className={"text-lg font-nunito font-semibold  text-text_black"}
              />
            </div>
            <Button
              onClick={() => {
                handleCheckOutRedirect();
              }}
              className={
                "w-[450px] bg-orange py-[16px] px-5 rounded-[16px] h-[57px] text-lg font-nunito text-white "
              }
              text={"CHECKOUT"}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ShoppingCartModal;
