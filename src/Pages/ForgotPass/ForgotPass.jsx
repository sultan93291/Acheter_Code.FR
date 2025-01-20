"use client";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../../Components/Tags/Heading/Heading";
import Button from "../../Components/Tags/Button/Button";
import Paragraph from "../../Components/Tags/Paragraph/Paragraph";
import { CgEye } from "react-icons/cg";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { useState } from "react";
import { Input } from "../../Components/Tags/Input/Input";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckout,
  setLoggedInUserData,
} from "@/redux/features/loggedInUserSlice";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

export const ForgotPass = () => {
  const [isShowPass, setisShowPass] = useState(false);
  const [isConfirmShowPass, setisConfirmShowPass] = useState(false);

  const [userData, setuserData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const handleFormData = e => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();

  const handlePassReset = e => {
    e.preventDefault();
    setLoading(true);

    const emailAdress = localStorage.getItem("email");

    console.log(userData);

    axios({
      method: "post",
      url: `${SiteURl}/api/users/login/reset-password`,
      data: {
        email: emailAdress,
        password: userData.password,
        password_confirmation: userData.confirmPassword,
      },
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setLoading(false);
          toast.success(res?.data?.message);
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      })
      .catch(err => {
        console.log(err?.response?.data.message, "this is hte error");
        setLoading(false);
        toast.error(err?.response?.data.message);
      })
      .finally(() => {
        setuserData({
          password: "",
          confirmPassword: "",
        });
        localStorage.removeItem("email");
      });
  };

  return (
    <section className="mx-auto bg-[#F8F8F8] flex items-center justify-center h-auto w-full  pt-[64px] pb-[80.29px]">
      <form className="flex flex-col items-center gap-y-12 " action="">
        <div className="flex flex-col gap-y-[32px] items-center">
          <Heading
            dataAos={"fade-in"}
            Variant={"h1"}
            text={"Update password"}
            className={
              "text-[64px] font-nunito text-text_black font-medium leading-[83.146px] tracking-[-0.64px]"
            }
          />
          <div className="flex flex-col gap-y-[44.79px] ">
            <div className="flex flex-col gap-y-[20.79px]">
              <div className="flex flex-row gap-y-8">
                <div className="flex flex-col gap-y-[28px] ">
                  <div className="flex flex-col gap-y-2 ">
                    <Heading
                      dataAos={"fade-in"}
                      Variant={"h5"}
                      text={"Password"}
                      className={
                        "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px]"
                      }
                    />
                    <div className="relative flex flex-row">
                      <Input
                        dataAos={"fade-in"}
                        type={isShowPass ? "text" : "password"}
                        className={"form_input pr-[80px] "}
                        placeholder={" Enter password"}
                        name={"password"}
                        onChange={e => {
                          handleFormData(e);
                        }}
                        value={userData.password}
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
                  <div className="flex flex-col gap-y-2 ">
                    <Heading
                      dataAos={"fade-in"}
                      Variant={"h5"}
                      text={"Confirm password"}
                      className={
                        "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px]"
                      }
                    />
                    <div className="relative flex flex-row">
                      <Input
                        dataAos={"fade-in"}
                        type={isConfirmShowPass ? "text" : "password"}
                        className={"form_input pr-[80px] "}
                        placeholder={" Confirm password"}
                        name={"confirmPassword"}
                        onChange={e => {
                          handleFormData(e);
                        }}
                        value={userData.confirmPassword}
                      />
                      {isConfirmShowPass ? (
                        <HiOutlineEyeSlash
                          data-aos={"fade-in"}
                          onClick={() => {
                            setisConfirmShowPass(!isConfirmShowPass);
                          }}
                          className="absolute h-[31.979px] w-[31.979px] cursor-pointer   right-0 mr-[25.58px] transform -translate-y-1/2 top-1/2 text-light_gray "
                        />
                      ) : (
                        <CgEye
                          data-aos={"fade-in"}
                          onClick={() => {
                            setisConfirmShowPass(!isConfirmShowPass);
                          }}
                          className="absolute h-[31.979px] w-[31.979px] cursor-pointer   right-0 mr-[25.58px] transform -translate-y-1/2 top-1/2 text-light_gray "
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              dataAos={"fade-in"}
              onClick={e => {
                handlePassReset(e);
              }}
              className={
                "w-[614px] bg-orange py-[19.19px] px-[31.98px] rounded-[16px] h-auto  text-2xl font-nunito leading-[38.375px] tracking-[-0.096px] text-white ease-in-out duration-300 border-[2px] border-solid border-transparent hover:border-orange hover:bg-transparent hover:text-orange   "
              }
              text={
                <>
                  {loading ? (
                    <ClipLoader
                      data-aos={"fade-in"}
                      color="#fff"
                      loading={loading}
                      size={25}
                    />
                  ) : (
                    "Update password"
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
