"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Tags/Button/Button";
import DeliveryCard from "@/Components/Cards/DeliveryCard/DeliveryCard";
import Heading from "@/Components/Tags/Heading/Heading";
import { Input } from "@/Components/Tags/Input/Input";

const Checkout = () => {
  const shoppingCartData = useSelector(
    state => state?.cartSlice?.shoppingCartData
  );

  const subtotalArr = [];

  const SUBTOTAL = shoppingCartData.map((item, index) => {
    const { price, quantity } = item;
    const total = price * quantity;
    subtotalArr.push(total);
  });

  const total = subtotalArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return (
    <section className="w-full h-auto pt-20 pb-[194px] flex bg-[#F8F8F8] flex-row gap-x-12 px-[300px] ">
      <div className="flex flex-col  gap-y-8 w-[538px] ">
        <Heading
          Variant={"h4"}
          text={"Shopping Details"}
          className={" text-2xl font-bold text-black font-nunito"}
        />
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-4 ">
            {shoppingCartData.map((item, index) => {
              return (
                <DeliveryCard
                  key={index}
                  heading={item.heading}
                  cartImg={item.cartImg}
                  quantity={item.quantity}
                  price={item.price}
                  id={item?.id}
                  isShoppingCart={false}
                />
              );
            })}
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-y-12 ">
          <div className="flex flex-row justify-between w-full">
            <Heading
              text={"Total"}
              Variant={"h5"}
              className={"text-lg font-nunito font-semibold  text-text_black"}
            />
            <Heading
              text={`${total}€`}
              Variant={"h5"}
              className={"text-lg font-nunito font-semibold  text-text_black"}
            />
          </div>
          <Button
            onClick={() => {
              handleCheckOutRedirect();
            }}
            className={
              "w-[538px] bg-orange py-[16px] px-5 rounded-[16px] h-[57px] text-lg font-nunito text-white "
            }
            text={`PAY ${total}€ `}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 ">
        <Heading
          Variant={"h4"}
          text={"User Details"}
          className={" text-2xl font-bold text-[#1D1F1E] font-nunito"}
        />
        <form className="flex flex-col gap-y-8" action="">
          <div className="flex flex-col gap-y-2 ">
            <Heading
              Variant={"h5"}
              text={"Name"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <Input
              type={"text"}
              placeholder={"Your full name"}
              className={
                "w-[734px] rounded-[12px] p-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <Heading
              Variant={"h5"}
              text={"Country"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <Input
              type={"text"}
              placeholder={"Your Country"}
              className={
                "w-[734px] rounded-[12px] p-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <Heading
              Variant={"h5"}
              text={"Email Address"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <Input
              type={"email"}
              placeholder={"Write your email"}
              className={
                "w-[734px] rounded-[12px] p-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <Heading
              Variant={"h5"}
              text={"Order Notes"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <textarea
              className={
                "w-[734px] rounded-[12px] h-[160px] py-4 px-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
              name=""
              id=""
              placeholder="Write any kind of notes"
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
