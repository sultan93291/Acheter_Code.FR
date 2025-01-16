import { Image } from "@/Components/Tags/Image/Image";
import Heading from "@/Components/Tags/Heading/Heading";
import { useDispatch } from "react-redux";
import {
  setCardData,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/features/CartSlice";

const DeliveryCard = ({
  heading,
  cartImg,
  quantity,
  price,
  id,
  isShoppingCart,
  isHrLine,
}) => {
  const dispatch = useDispatch();

  const decreaseCounterValue = () => {
    dispatch(decreaseQuantity({ id: id }));
  };

  const increaseCounterValue = () => {
    dispatch(increaseQuantity({ id: id }));
  };

  const handleCartDelete = id => {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Filter out the item with the matching id
    const updatedCart = cart.filter(item => item.id !== id);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log(`Product with id ${id} has been deleted.`);
    console.log("Updated Cart:", updatedCart);

    // Dispatch the updated cart to Redux
    dispatch(setCardData({ Data: updatedCart }));
  };

  return (
    <div
      className={`flex flex-row items-center justify-between ${
        isShoppingCart
          ? ` h-auto p-4 ${
              isHrLine &&
              "relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#ADD8E6] after:opacity-50"
            }  `
          : " p-5 bg-white shadow-custom_shadow rounded-[16px] "
      }`}
    >
      <Image
        Src={cartImg}
        AltTxt={"not found"}
        className={"w-[64px] h-[64px] rounded-[8px] "}
      />
      <div className="flex flex-col gap-y-5 ">
        <div className="flex flex-row justify-between  ">
          <Heading
            Variant={"h4"}
            text={heading}
            className={" text-lg font-semibold text-text_black font-nunito "}
          />
          <svg
            onClick={() => {
              handleCartDelete(id);
            }}
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M4.5 5.5V22.5H19.5V5.5H4.5Z"
              stroke="#FF5630"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
            <path
              d="M10 10.5V17M14 10.5V17M2 5.5H22"
              stroke="#FF5630"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5.5L9.6445 2.5H14.3885L16 5.5H8Z"
              stroke="#FF5630"
              strokeWidth="2.2"
              strokeLinejoin="round"
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
              {quantity}
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
            text={`${quantity} x ${price}€ = ${(quantity * price).toFixed(2)}`}
            Variant={"h4"}
            className={" text-lg font-semibold font-nunito text-[#6B4500] "}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryCard;
