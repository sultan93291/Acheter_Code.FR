"use client";
import { Link } from "react-router-dom";
import Heading from "../../Components/Tags/Heading/Heading";
import Button from "../../Components/Tags/Button/Button";
import Paragraph from "../../Components/Tags/Paragraph/Paragraph";
import { CgEye } from "react-icons/cg";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import { Input } from "../../Components/Tags/Input/Input";

const Register = () => {
  const [isShowPass, setisShowPass] = useState(false);
  return (
    <section className="mx-auto bg-[#F8F8F8] flex items-center justify-center h-auto w-full  pt-[64px] pb-[84.29px]">
      <form className="flex flex-col items-center gap-y-12 " action="">
        <div className="flex flex-col gap-y-[32px] items-center">
          <Heading
            Variant={"h1"}
            text={"Create Your Account"}
            className={
              "text-[64px] font-nunito text-text_black font-medium leading-[83.146px] tracking-[-0.64px]"
            }
          />
          <div className="flex flex-col gap-y-[44.79px] ">
            <div className="flex flex-row gap-y-8">
              <div className="flex flex-col gap-y-[28px] ">
                <div className="flex flex-col gap-y-2 ">
                  <Heading
                    Variant={"h5"}
                    text={"Nickname"}
                    className={
                      "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px];"
                    }
                  />
                  <Input
                    type={"text"}
                    className={"form_input"}
                    placeholder={"Enter your nickname"}
                  />
                </div>
                <div className="flex flex-col gap-y-2 ">
                  <Heading
                    Variant={"h5"}
                    text={"Email"}
                    className={
                      "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px];"
                    }
                  />
                  <Input
                    type={"email"}
                    className={"form_input"}
                    placeholder={"Enter your email "}
                  />
                </div>
                <div className="flex flex-col gap-y-2 ">
                  <Heading
                    Variant={"h5"}
                    text={"Password"}
                    className={
                      "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px];"
                    }
                  />
                  <div className="relative flex flex-row">
                    <Input
                      type={isShowPass ? "text" : "password"}
                      className={"form_input pr-[80px] "}
                      placeholder={" Set password"}
                    />
                    {isShowPass ? (
                      <HiOutlineEyeSlash
                        onClick={() => {
                          setisShowPass(!isShowPass);
                        }}
                        className="absolute h-[31.979px] w-[31.979px] cursor-pointer   right-0 mr-[25.58px] transform -translate-y-1/2 top-1/2 text-light_gray "
                      />
                    ) : (
                      <CgEye
                        onClick={() => {
                          setisShowPass(!isShowPass);
                        }}
                        className="absolute h-[31.979px] w-[31.979px] cursor-pointer   right-0 mr-[25.58px] transform -translate-y-1/2 top-1/2 text-light_gray "
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button
              className={
                "w-[614px] bg-orange py-[19.19px] px-[31.98px] rounded-[16px] h-auto text-2xl font-nunito leading-[38.375px] tracking-[-0.096px] text-white "
              }
              text={"Register"}
            />
          </div>
        </div>
        <Paragraph
          className={
            "flex flex-row gap-x-2 text-xl font-normal text-text_black leading-[38.375px] tracking-[-0.08px] "
          }
          text={
            <>
              Already have an account?
              <Link className="font-medium underline " to={"/login"}>
                Login
              </Link>
            </>
          }
        />
      </form>
    </section>
  );
};

export default Register;
