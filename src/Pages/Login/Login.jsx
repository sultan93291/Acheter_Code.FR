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
import { setCheckout, setLoggedInUserData } from "@/redux/features/loggedInUserSlice";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const [isShowPass, setisShowPass] = useState(false);
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const SiteURl = import.meta.env.VITE_SITE_URL;

  const loggedInUserData = useSelector(
    state => state.loggedInUserSlice.loggedInUserData
  );

  const isCheckout = useSelector(state => state?.loggedInUserSlice?.isCheckout);

  const handleFormData = e => {
    const { name, value } = e.target;
    setuserData({ ...userData, [name]: value });
  };

  const navigate = useNavigate();

  const handleLogin = e => {
    setLoading(true);
    e.preventDefault();
    axios({
      method: "post",
      url: `${SiteURl}/api/users/login`,
      data: {
        email: userData.email,
        password: userData.password,
      },
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setLoading(false);
          toast.success(res?.data?.message);
          console.log();
          localStorage.setItem("token", res?.data?.data?.token);
          setTimeout(() => {
            if (isCheckout) {
              dispatch(setCheckout());
              navigate("/checkout");
              window.location.reload();
            } else {
              navigate("/");
              window.location.reload();
            }
            
          }, 3000);
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
            Variant={"h1"}
            text={"Login"}
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
                      Variant={"h5"}
                      text={"Email"}
                      className={
                        "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px]"
                      }
                    />
                    <Input
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
                  <div className="flex flex-col gap-y-2 ">
                    <Heading
                      Variant={"h5"}
                      text={"Password"}
                      className={
                        "text-[22.385px] font-medium font-nunito text-text_black leading-[31.979px] tracking-[-0.09px]"
                      }
                    />
                    <div className="relative flex flex-row">
                      <Input
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
                </div>
              </div>
              <Link
                className="text-xl leading-[31.979px] tracking-[-0.08px] font-semibold text-right underline text-secondary_gray "
                to={"/submit-email"}
              >
                {" "}
                Forgot password?{" "}
              </Link>
            </div>
            <Button
              onClick={e => {R
                handleLogin(e);
              }}
              className={
                "w-[614px] bg-orange py-[19.19px] px-[31.98px] rounded-[16px] h-auto  text-2xl font-nunito leading-[38.375px] tracking-[-0.096px] text-white ease-in-out duration-300 border-[2px] border-solid border-transparent hover:border-orange hover:bg-transparent hover:text-orange  "
              }
              text={
                <>
                  {loading ? (
                    <ClipLoader color="#fff" loading={loading} size={25} />
                  ) : (
                    "Login"
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
              Don’t have an account?
              <Link className="font-medium underline " to={"/register"}>
                Create an account
              </Link>
            </>
          }
        />
      </form>
    </section>
  );
};

export default Login;
