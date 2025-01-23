"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@/Components/Tags/Button/Button";
import DeliveryCard from "@/Components/Cards/DeliveryCard/DeliveryCard";
import Heading from "@/Components/Tags/Heading/Heading";
import { Input } from "@/Components/Tags/Input/Input";
import axios from "axios";
import Navbar from "./../../Shared/Navbar";
import { emptyCart } from "@/redux/features/CartSlice";
import { setCheckout } from "@/redux/features/loggedInUserSlice";
import { toast } from "react-toastify";

const Checkout = () => {
  const dispatch = useDispatch();
  const SiteURl = import.meta.env.VITE_SITE_URL;

  const [userData, setuserData] = useState({
    country: "",
    notes: "",
    email: "",
    name: "",
  });

  const shoppingCartData = useSelector(
    state => state?.cartSlice?.shoppingCartData
  );

  const loggedInUserData = useSelector(
    state => state?.loggedInUserSlice?.loggedInUserData
  );

  console.log("loggedin user data", loggedInUserData.name);

  const subtotalArr = [];

  const handleUserData = e => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const SUBTOTAL = shoppingCartData?.map((item, index) => {
    const { price, quantity } = item;
    const total = price * quantity;
    subtotalArr.push(total);
  });

  const total = subtotalArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  const navigate = useNavigate();

  const formattedTotal = total.toFixed(2);

  const handleCheckOutDataSubmit = () => {
    const order_cards = shoppingCartData.map(item => ({
      card_id: item?.id,
      quantity: item?.quantity,
      unit_price: item?.price,
    }));

    const token = localStorage.getItem("token");

    // Ensure order_cards is not empty and total_price is valid
    console.log("Mapped order_cards:", order_cards);
    console.log("Formatted total price:", formattedTotal);

    if (!order_cards.length || !formattedTotal) {
      toast.error("Order card missing");
      console.error("Missing required fields: order_cards or total_price");
      return; // Stop if data is incomplete
    }

    // Create the final object

    if (loggedInUserData.id) {
      axios({
        method: "post",
        url: `${SiteURl}/api/users/create-order`,
        data: {
          order_cards: order_cards,
          total_price: formattedTotal,
          note: userData.notes,
          name: userData.name,
          email: userData.email, // Fixed typo here from emai -> email
          country: userData.country,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Adding the token to the headers
        },
      })
        .then(res => {
          console.log(res);
          if (res.status === 201) {
            toast.success("Order created successfully");
            setTimeout(() => {
              dispatch(emptyCart());
              navigate("/");
            }, 2000);
          }
        })
        .catch(err => {
          console.log(err);
          toast.error("Failed to create order");
        })
        .finally(() => {
          setuserData({
            name: "",
            email: "",
            country: "",
            notes: "",
          });
        });
    } else {
      navigate("/login");
      dispatch(setCheckout());
    }

    // You can now use `cardDetails` as needed (e.g., send it to an API)
    console.log("This is the full cardDetails object:", cardDetails);
  };

  console.log(userData, "user data");

  return (
    <section className="w-full h-auto overflow-hidden pt-10 2xl:pt-20 pb-10 2xl:pb-[194px] flex bg-[#F8F8F8] flex-col-reverse gap-y-10 2xl:flex-row justify-between 4xl:gap-x-12 4xl:justify-normal items-center 2xl:items-start px-5 xl:px-8 2xl:px-16   3xl:px-[150px] 4xl:px-[300px] ">
      <div className="flex flex-col  gap-y-8 w-auto 3xl:w-[538px] ">
        <Heading
          dataAos={"fade-in"}
          Variant={"h4"}
          text={"Shopping Details"}
          className={" text-2xl font-bold text-black font-nunito"}
        />
        <div className="flex flex-col gap-y-6 ">
          {shoppingCartData.length ? (
            <div className="flex flex-col gap-y-4 max-h-[600px]  overflow-y-scroll ">
              {shoppingCartData.map((item, index) => {
                return (
                  <DeliveryCard
                    key={index}
                    heading={item?.heading}
                    cartImg={item?.cartImg}
                    quantity={item?.quantity}
                    price={item?.price}
                    id={item?.id}
                    isShoppingCart={false}
                  />
                );
              })}
            </div>
          ) : (
            <Heading
              dataAos={"fade-in"}
              text={"Nothing to show in cart"}
              className={"text-lg font-bold text-card_gray font-nunito"}
              Variant="h4"
            />
          )}
        </div>
        <div className="relative flex flex-col items-center 2xl:items-start gap-y-12 ">
          <div className="flex flex-row justify-between w-full">
            <Heading
              dataAos={"fade-in"}
              text={"Total"}
              Variant={"h5"}
              className={"text-lg font-nunito font-semibold  text-text_black"}
            />
            <Heading
              dataAos={"fade-in"}
              text={`${formattedTotal}€`}
              Variant={"h5"}
              className={"text-lg font-nunito font-semibold  text-text_black"}
            />
          </div>
          <Button
            dataAos={"fade-in"}
            onClick={() => {
              handleCheckOutDataSubmit();
            }}
            className={
              " w-auto xl:w-[538px] bg-orange py-[16px] px-5 rounded-[16px] h-[57px] text-lg font-nunito text-white "
            }
            text={`PAY ${formattedTotal}€ `}
          />
        </div>
      </div>
      <div className="flex items-center lg:items-start flex-col gap-y-4 lg:gap-y-6 2xl:gap-y-8 ">
        <Heading
          dataAos={"fade-in"}
          Variant={"h4"}
          text={"User Details"}
          className={" text-2xl font-bold text-[#1D1F1E] font-nunito"}
        />
        <form
          className="flex flex-col items-center gap-y-4 lg:gap-y-6 2xl:gap-y-8"
          action=""
        >
          <div className="flex flex-col gap-y-2 ">
            <Heading
              dataAos={"fade-in"}
              Variant={"h5"}
              text={"Name"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <Input
              dataAos={"fade-in"}
              type={"text"}
              placeholder={"Your full name"}
              className={
                " w-[280px] sm:w-[380px] lg:w-[500px] 4xl:w-[734px] rounded-[12px] p-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
              onChange={e => {
                handleUserData(e);
              }}
              value={userData.name}
              name={"name"}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <Heading
              dataAos={"fade-in"}
              Variant={"h5"}
              text={"Country"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <Input
              dataAos={"fade-in"}
              type={"text"}
              placeholder={"Your Country"}
              className={
                " w-[280px] sm:w-[380px] lg:w-[500px] 4xl:w-[734px]   rounded-[12px] p-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
              onChange={e => {
                handleUserData(e);
              }}
              value={userData.country}
              name={"country"}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <Heading
              data-aos={"fade-in"}
              Variant={"h5"}
              text={"Email Address"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <Input
              dataAos={"fade-in"}
              type={"email"}
              placeholder={"Write your email"}
              className={
                " sm:w-[380px] w-[280px] lg:w-[500px] 4xl:w-[734px] rounded-[12px] p-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
              onChange={e => {
                handleUserData(e);
              }}
              value={userData.email}
              name={"email"}
            />
          </div>
          <div className="flex flex-col gap-y-2 ">
            <Heading
              dataAos={"fade-in"}
              Variant={"h5"}
              text={"Order Notes"}
              className={" text-black text-lg font-medium font-nunito "}
            />
            <textarea
              data-aos={"fade-in"}
              className={
                "sm:w-[380px] w-[280px] lg:w-[500px] 4xl:w-[734px] rounded-[12px] h-[160px] py-4 px-5 bg-white shadow-custom_shadow text-lg font-nunito font-normal  outline-none text-text_gray"
              }
              name="notes"
              id=""
              placeholder="Write any kind of notes"
              onChange={e => {
                handleUserData(e);
              }}
              value={userData.notes}
            ></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
