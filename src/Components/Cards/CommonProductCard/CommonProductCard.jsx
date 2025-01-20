"use client";
import { useState } from "react";
import steam from "../../../assets/images/Home/steam.png";
import Button from "../../Tags/Button/Button";
import Heading from "../../Tags/Heading/Heading";
import ShoppingCartModal from "../Modals/ShoppingCartModal/ShoppingCartModal";
import { useNavigate } from "react-router-dom";
import { setCardData } from "@/redux/features/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CommonProductCard = ({
  cardName,
  cardHeight,
  bgImg,
  rating,
  discountpercentage,
  heading,
  subHeading,
  seller,
  price,
  discountPrice,
  id,
}) => {
  const [isopen, setisopen] = useState(false);
  const navigate = useNavigate();
  const handleDetailsRedirect = () => {
    navigate(`/details/${id}`);
  };

  const dispatch = useDispatch();

  const handleCartDataArr = (
    id,
    cardName,
    discountPrice,
    bgImg,
    quantity = 2
  ) => {
    console.log(
      `Adding/updating product: ID = ${id}, Name = ${cardName}, Price = ${discountPrice}, Quantity = ${quantity}`
    );

    // Retrieve the cart from localStorage, or use an empty array if it doesn't exist
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the item with the same id already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.id === id);

    if (existingProductIndex === -1) {
      // If the item doesn't exist, add the new product to the cart
      const newProduct = {
        id,
        heading: cardName,
        price: discountPrice,
        cartImg: bgImg,
        quantity,
      };

      cart.push(newProduct);
      console.log("Product added:", newProduct);
      toast.success("Product added to cart!");
    } else {
      // If the item exists, update the quantity
      cart[existingProductIndex].quantity += quantity;
      console.log("Product quantity updated:", cart[existingProductIndex]);
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Dispatch the updated cart to Redux
    dispatch(setCardData({ Data: cart }));
  };

  return (
    <>
      <ShoppingCartModal
        onClose={() => {
          setisopen(false);
        }}
        isOpen={isopen}
      />
      <div
        className={`w-[303px] hover:w-[310px] overflow-x-hidden group duration-300 ease-in-out  relative h-${cardHeight} rounded-[16px] bg-white shadow-custom_shadow flex flex-col`}
      >
        <div
          onClick={() => {
            handleDetailsRedirect();
          }}
          className="w-full group-hover:p-[15px]  transition-all duration-500 group-hover:bg-[length:110%] group-hover:animate-zoom-in  h-[327px]  bg-ocean_blue rounded-t-[16px] p-[12px] cursor-pointer "
        >
          <div
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className=" w-[279px] h-[302px] rounded-t-[12px] relative "
          >
            <div
              data-aos="fade-in"
              className="absolute top-0 right-0 w-[68px] h-[30px] px-[10px] flex flex-row items-center bg-secondary_orange rounded-[12px] mt-2 mr-2 gap-x-1 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                className=" ease-in-out duration-700 group-hover:rotate-[360deg]"
              >
                <path
                  d="M8.02447 0.463525C8.17415 0.00287003 8.82585 0.00287003 8.97553 0.463525L10.6329 5.56434C10.6998 5.77035 10.8918 5.90983 11.1084 5.90983H16.4717C16.9561 5.90983 17.1575 6.52964 16.7656 6.81434L12.4266 9.96681C12.2514 10.0941 12.178 10.3198 12.245 10.5258L13.9023 15.6266C14.052 16.0873 13.5248 16.4704 13.1329 16.1857L8.79389 13.0332C8.61865 12.9059 8.38135 12.9059 8.20611 13.0332L3.8671 16.1857C3.47524 16.4704 2.948 16.0873 3.09768 15.6266L4.75503 10.5258C4.82197 10.3198 4.74864 10.0941 4.57339 9.96681L0.234384 6.81434C-0.157473 6.52964 0.0439151 5.90983 0.528277 5.90983H5.89159C6.1082 5.90983 6.30018 5.77035 6.36712 5.56434L8.02447 0.463525Z"
                  fill="white"
                />
              </svg>
              <Heading
                data-aos="fade-in"
                text={rating}
                Variant={"h6"}
                className={" text-[16px] text-white font-bold font-nunito "}
              />
            </div>
            <div className="py-[10px] px-4 absolute bottom-0 right-0 w-[91px] rounded-tl-[2px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px]  h-[42px] mb-2 mr-2 bg-red  ">
              <Heading
                data-aos="fade-in"
                Variant={"h4"}
                text={`${discountpercentage} off`}
                className={
                  "text-[16px] font-nunito text-white font-semibold group-hover:animate-pulse-text "
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col px-3 py-4 bg-white gap-y-6 rounded-b-[16px] ">
          <div>
            <Heading
              data-aos="fade-in"
              onClick={() => {
                handleDetailsRedirect();
              }}
              Variant={"h3"}
              text={heading}
              className={
                " text-text_black text-[18px] font-nunito font-semibold cursor-pointer "
              }
            />
            {subHeading && (
              <Heading
                Variant={"h3"}
                text={subHeading}
                className={
                  " text-text_black text-[18px] font-nunito font-semibold "
                }
              />
            )}
          </div>
          <div className="flex flex-col gap-y-3 ">
            <div className="flex flex-col gap-y-1">
              <div data-aos="fade-in" className="flex flex-row gap-x-[47px] ">
                <Heading
                  Variant={"h4"}
                  text={"Seller"}
                  className={
                    "text-[18px] font-medium font-nunito text-text_black"
                  }
                />
                <Heading
                  Variant={"h4"}
                  text={seller}
                  className={
                    "text-[18px] font-medium font-nunito text-text_black truncate "
                  }
                />
              </div>
              <div
                data-aos="fade-in"
                className="flex flex-row gap-x-[57px] items-center "
              >
                <Heading
                  Variant={"h4"}
                  text={"Each"}
                  className={
                    "text-[18px] font-medium font-nunito text-text_black"
                  }
                />
                <div
                  data-aos="fade-in"
                  className="flex flex-row items-center gap-x-2 "
                >
                  <Heading
                    Variant={"h4"}
                    text={`${discountPrice}€`}
                    className={
                      "text-[24px] font-semibold font-nunito text-text_black"
                    }
                  />
                  <Heading
                    Variant={"h6"}
                    text={<del> {`${price}€`} </del>}
                    className={
                      "text-[16px] font-semibold font-nunito text-light_gray"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            data-aos="fade-in"
            onClick={() => {
              setisopen(true);
              handleCartDataArr(id, cardName, discountPrice, bgImg);
            }}
            className={
              "w-[194px] rounded-[12px] leading-[164%] font-nunito font-medium text-[18px] border-[2px] border-solid border-transparent  bg-orange h-auto py-[10px] flex items-center flex-row gap-x-2 uppercase  justify-center text-white group-hover:bg-transparent ease-in-out duration-200 group-hover:border-orange  group-hover:text-orange     "
            }
            text={
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  className="ease-in-out duration-200 group-hover:stroke-orange "
                >
                  <path
                    d="M3.48526 16.9501C2.53193 13.1367 2.05526 11.2312 3.05638 9.94897C4.05749 8.66675 6.02304 8.66675 9.95304 8.66675H15.0975C19.0286 8.66675 20.993 8.66675 21.9942 9.94897C22.9953 11.2312 22.5186 13.1379 21.5653 16.9501C20.9586 19.3756 20.6564 20.5879 19.7519 21.2945C18.8475 22.0001 17.5975 22.0001 15.0975 22.0001H9.95304C7.45304 22.0001 6.20304 22.0001 5.2986 21.2945C4.39415 20.5879 4.09082 19.3756 3.48526 16.9501Z"
                    className="stroke-current"
                    strokeWidth="1.9"
                  />
                  <path
                    d="M20.8542 9.22219L20.0653 6.32775C19.7608 5.21108 19.6086 4.65331 19.2964 4.23219C18.9851 3.81382 18.5623 3.49153 18.0764 3.3022C17.5875 3.11108 17.0097 3.11108 15.8542 3.11108M4.1875 9.22219L4.97639 6.32775C5.28083 5.21108 5.43306 4.65331 5.74528 4.23219C6.05659 3.81382 6.47938 3.49153 6.96528 3.3022C7.45417 3.11108 8.03194 3.11108 9.1875 3.11108"
                    className="stroke-current"
                    strokeWidth="1.9"
                  />
                  <path
                    d="M9.1875 3.11111C9.1875 2.81643 9.30456 2.53381 9.51294 2.32544C9.72131 2.11706 10.0039 2 10.2986 2H14.7431C15.0377 2 15.3204 2.11706 15.5287 2.32544C15.7371 2.53381 15.8542 2.81643 15.8542 3.11111C15.8542 3.4058 15.7371 3.68841 15.5287 3.89679C15.3204 4.10516 15.0377 4.22222 14.7431 4.22222H10.2986C10.0039 4.22222 9.72131 4.10516 9.51294 3.89679C9.30456 3.68841 9.1875 3.4058 9.1875 3.11111Z"
                    className="stroke-current"
                    strokeWidth="1.3"
                  />
                </svg>
                Add to Cart
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default CommonProductCard;
