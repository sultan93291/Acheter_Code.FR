import Button from "@/Components/Tags/Button/Button";
import Heading from "@/Components/Tags/Heading/Heading";
import { Input } from "@/Components/Tags/Input/Input";
import Paragraph from "@/Components/Tags/Paragraph/Paragraph";
import axios from "axios";
import React, { useState } from "react";
import { CgEye } from "react-icons/cg";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export const SubmitEmail = () => {
  const [userData, setuserData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleFormData = e => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const handleEmailSubmit = e => {
    setLoading(true);
    e.preventDefault();
    axios({
      method: "post",
      url: `${SiteURl}/api/users/login/email-verify`,
      data: {
        email: userData.email,
      },
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setLoading(false);
          toast.success(res?.data?.message);
          localStorage.setItem("email", userData.email);
          setTimeout(() => {
            navigate("/verify-otp");
            window.location.reload();
          }, 500);
        }
      })
      .catch(err => {
        console.log(err?.response?.data.message, "this is hte error");
        setLoading(false);
        toast.error(err?.response?.data.message);
      });
  };

  return (
    <section className="mx-auto bg-[#F8F8F8] flex items-center justify-center h-auto w-full  pt-[64px] pb-[80.29px]">
      <form className="flex flex-col items-center gap-y-12 " action="">
        <div className="flex flex-col gap-y-[32px] items-center">
          <Heading
            dataAos={"fade-in"}
            Variant={"h1"}
            text={"Forgot Password"}
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
                      text={"Email"}
                      className={
                        "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px]"
                      }
                    />
                    <Input
                      dataAos={"fade-in"}
                      type={"email"}
                      name={"email"}
                      className={"form_input"}
                      placeholder={"Enter your email "}
                      value={userData.email}
                      onChange={e => {
                        handleFormData(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              dataAos={"fade-in"}
              onClick={e => {
                handleEmailSubmit(e);
              }}
              className={
                "w-[614px] bg-orange py-[19.19px] px-[31.98px] rounded-[16px] h-auto  text-2xl font-nunito leading-[38.375px] tracking-[-0.096px] text-white ease-in-out duration-300 border-[2px] border-solid border-transparent hover:border-orange hover:bg-transparent hover:text-orange  "
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
                    "Submit"
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
