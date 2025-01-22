import React from "react";
import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import { Input } from "@/Components/Tags/Input/Input";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import { useState } from "react";
import { CgEye } from "react-icons/cg";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";

export const VerfiyOtp = () => {
  const [userOtp, setuserOtp] = useState({
    otpOne: "",
    otpTwo: "",
    otpThree: "",
    otpFour: "",
  });

  const handleFormData = e => {
    const { name, value } = e.target;

    // Allow only numeric values and restrict to a single digit
    if (/^\d?$/.test(value)) {
      setuserOtp({ ...userOtp, [name]: value });

      // Move focus based on input
      if (value) {
        // Focus on the next input if a digit is entered
        const nextInput = document.querySelector(
          `input[name="${getNextInputName(name)}"]`
        );
        if (nextInput) nextInput.focus();
      } else {
        // Focus on the previous input if the value is deleted
        const prevInput = document.querySelector(
          `input[name="${getPrevInputName(name)}"]`
        );
        if (prevInput) prevInput.focus();
      }
    }
  };

  // Helper function to determine the next input field
  const getNextInputName = currentName => {
    const fields = ["otpOne", "otpTwo", "otpThree", "otpFour"];
    const currentIndex = fields.indexOf(currentName);
    return currentIndex < fields.length - 1 ? fields[currentIndex + 1] : null;
  };

  // Helper function to determine the previous input field
  const getPrevInputName = currentName => {
    const fields = ["otpOne", "otpTwo", "otpThree", "otpFour"];
    const currentIndex = fields.indexOf(currentName);
    return currentIndex > 0 ? fields[currentIndex - 1] : null;
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const SiteURl = import.meta.env.VITE_SITE_URL;

  const handleEmailSubmit = e => {
    setLoading(true);
    e.preventDefault();
    const otp =
      userOtp.otpOne + userOtp.otpTwo + userOtp.otpThree + userOtp.otpFour;

    const formattedOtp = Number(otp);
    const emailAdress = localStorage.getItem("email");

    axios({
      method: "post",
      url: `${SiteURl}/api/users/login/otp-verify`,
      data: {
        email: emailAdress,
        otp: formattedOtp,
      },
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setLoading(false);
          toast.success(res?.data?.message);
          localStorage.setItem("isAuthorize", true);
          navigate("/reset-pass");
        }
      })
      .catch(err => {
        console.log(err?.response?.data.message, "this is hte error");
        setLoading(false);
        toast.error(err?.response?.data.message);
      })
      .finally(() => {
        setuserOtp({
          otpOne: "",
          otpTwo: "",
          otpThree: "",
          otpFour: "",
        });
      });
  };

  return (
    <section className="mx-auto bg-[#F8F8F8] flex items-center justify-center h-auto w-full pt-[20px] pb-[40.29px]  3xl:pt-[64px] 3xl:pb-[80.29px]">
      <form
        className="flex flex-col items-center gap-y-[15px] lg:gap-y-6 3xl:gap-y-12  "
        action=""
      >
        <div className="flex flex-col gap-y-[15px] md:gap-y-[32px] items-center">
          <Heading
            dataAos={"fade-in"}
            Variant={"h1"}
            text={"Verify Otp"}
            className={
              "text-[32px] md:text-[42px] 3xl:text-[64px] font-nunito text-text_black font-medium leading-[83.146px] tracking-[-0.64px]"
            }
          />
          <div className="flex flex-col gap-y-[20px] md:gap-y-[44.79px] ">
            <div className="flex flex-col gap-y-[20.79px]">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <div className="flex flex-col gap-y-[28px] ">
                  <div className="flex flex-col gap-y-2 ">
                    <div className="flex flex-row gap-x-3 md:gap-x-6 items-center justify-center ">
                      <Input
                        dataAos={"fade-in"}
                        type={"text"}
                        name={"otpOne"}
                        className={"form_input  w-[40px] md:w-[80px] "}
                        value={userOtp.otpOne}
                        onChange={e => {
                          handleFormData(e);
                        }}
                      />
                      <Input
                        dataAos={"fade-in"}
                        type={"text"}
                        name={"otpTwo"}
                        className={"form_input  w-[40px] md:w-[80px] "}
                        value={userOtp.otpTwo}
                        onChange={e => {
                          handleFormData(e);
                        }}
                      />
                      <Input
                        dataAos={"fade-in"}
                        type={"text"}
                        name={"otpThree"}
                        className={"form_input    w-[40px] md:w-[80px] "}
                        value={userOtp.otpThree}
                        onChange={e => {
                          handleFormData(e);
                        }}
                      />
                      <Input
                        dataAos={"fade-in"}
                        type={"text"}
                        name={"otpFour"}
                        className={"form_input    w-[40px] md:w-[80px] "}
                        value={userOtp.otpFour}
                        onChange={e => {
                          handleFormData(e);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Link
                  data-aos={"fade-in"}
                  className="flex flex-row gap-x-2 text-[18px] lg:text-xl font-normal text-text_black leading-[38.375px] tracking-[-0.08px] "
                  to={"/submit-email"}
                >
                  {" "}
                  Resend otp ?{" "}
                </Link>
              </div>
            </div>
            <Button
              dataAos={"fade-in"}
              onClick={e => {
                handleEmailSubmit(e);
              }}
              className={
                "w-auto xl:w-[614px] bg-orange py-[5px] md:py-[10px] lg:py-[19.19px]  px-[31.98px] rounded-[18px] h-auto text-[20px]  lg:text-2xl font-nunito lg:leading-[38.375px] tracking-[-0.096px] text-white ease-in-out duration-300 border-[2px] border-solid border-transparent hover:border-orange hover:bg-transparent hover:text-orange group  "
              }
              text={
                <>
                  {loading ? (
                    <ClipLoader color="#fff" loading={loading} size={25} />
                  ) : (
                    "Verify"
                  )}
                </>
              }
            />
          </div>
        </div>
      </form>
    </section>
  );
};
