"use client";
import { Link, useNavigate } from "react-router-dom";
import Heading from "../../Components/Tags/Heading/Heading";
import Button from "../../Components/Tags/Button/Button";
import Paragraph from "../../Components/Tags/Paragraph/Paragraph";
import { CgEye } from "react-icons/cg";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { Input } from "../../Components/Tags/Input/Input";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

const Register = () => {
  const [isShowPass, setisShowPass] = useState(false);
  const [isconfirmPass, setisConfirmPass] = useState(false);
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const SiteURl = import.meta.env.VITE_SITE_URL;
  console.log("site url", SiteURl);

  const navigate = useNavigate();
  const handleFormData = e => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const handleRegister = e => {
    setLoading(true);
    e.preventDefault();
    axios({
      method: "post",
      url: `${SiteURl}/api/users/register`,
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.confirm_password,
      },
    })
      .then(res => {
        console.log(res.status);
        if (res.status === 201) {
          toast.success(res?.data?.message);
          setLoading(false);
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      })
      .catch(err => {
        console.log(err?.response?.data.message, "this is hte error");
        setLoading(false);
        toast.error(err?.response?.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(userData);

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
                    onChange={e => {
                      handleFormData(e);
                    }}
                    name={"name"}
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
                    name={"email"}
                    onChange={e => {
                      handleFormData(e);
                    }}
                    type={"email"}
                    className={"form_input"}
                    placeholder={"Enter your email "}
                  />
                </div>
                <div className="flex flex-col gap-y-2 ">
                  <Heading
                    onChange={e => {
                      handleFormData(e);
                    }}
                    Variant={"h5"}
                    text={"Password"}
                    className={
                      "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px];"
                    }
                  />
                  <div className="relative flex flex-row">
                    <Input
                      name={"password"}
                      onChange={e => {
                        handleFormData(e);
                      }}
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
                <div className="flex flex-col gap-y-2 ">
                  <Heading
                    onChange={e => {
                      handleFormData(e);
                    }}
                    Variant={"h5"}
                    text={"Confirm Password"}
                    className={
                      "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px];"
                    }
                  />
                  <div className="relative flex flex-row">
                    <Input
                      name={"confirm_password"}
                      onChange={e => {
                        handleFormData(e);
                      }}
                      type={isconfirmPass ? "text" : "password"}
                      className={"form_input pr-[80px] "}
                      placeholder={" Confirm password"}
                    />
                    {isconfirmPass ? (
                      <HiOutlineEyeSlash
                        onClick={() => {
                          setisConfirmPass(!isconfirmPass);
                        }}
                        className="absolute h-[31.979px] w-[31.979px] cursor-pointer   right-0 mr-[25.58px] transform -translate-y-1/2 top-1/2 text-light_gray "
                      />
                    ) : (
                      <CgEye
                        onClick={() => {
                          setisConfirmPass(!isconfirmPass);
                        }}
                        className="absolute h-[31.979px] w-[31.979px] cursor-pointer   right-0 mr-[25.58px] transform -translate-y-1/2 top-1/2 text-light_gray "
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Button
              onClick={e => {
                handleRegister(e);
              }}
              className={
                "w-[614px] bg-orange py-[19.19px] px-[31.98px] rounded-[16px] h-auto text-2xl font-nunito leading-[38.375px] tracking-[-0.096px] text-white "
              }
              text={
                <>
                  {loading ? (
                    <ClipLoader color="#fff" loading={loading} size={25} />
                  ) : (
                    "Register"
                  )}
                </>
              }
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
