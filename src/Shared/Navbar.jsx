"use client";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Heading from "../Components/Tags/Heading/Heading";
import { CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { ImCoinEuro } from "react-icons/im";
import Button from "../Components/Tags/Button/Button";
import { FaRegUser } from "react-icons/fa6";
import { Input } from "../Components/Tags/Input/Input";
import PurchaseHistoryModal from "../Components/Cards/Modals/PurchaseHistoryModal/PurchaseHistoryModal";
import { useContext, useEffect, useState } from "react";
import AddFundModal from "@/Components/Cards/Modals/AddFundModal/AddFundModal";
import { AuthContext } from "@/Provider/AuthProvider/AuthProvider";
import { setFilterCardData } from "@/redux/features/filterCardSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const [isFundopen, setisFundopen] = useState(false);
  const [FilterCardnames, setFilterCardnames] = useState("STEAM");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);

  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    handleFilterData(FilterCardnames);
  });

  const handleFilterData = FilterCardname => {
    setFilterCardnames(FilterCardname);
    axios({
      method: "get",
      url: `https://borisdessy.softvencefsd.xyz/api/filter/cards?platform=${FilterCardname}`,
    })
      .then(res => {
        dispatch(setFilterCardData(res?.data?.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const socailLinks = [
    {
      linkName: "STEAM",
    },
    {
      linkName: "GOOGLE STORE",
    },
    {
      linkName: "APPLE STORE",
    },
    {
      linkName: "XBOX",
    },
    {
      linkName: "PLAYSTATION",
    },
    {
      linkName: "FORTNITE",
    },
    {
      linkName: "ROBLOX",
    },
    {
      linkName: "MINECRAFT",
    },
    {
      linkName: "PC",
    },
    {
      linkName: "MOBILE",
    },
  ];

  const handleRootRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <PurchaseHistoryModal
        onClose={() => {
          setisopen(false);
        }}
        isOpen={isopen}
      />
      <AddFundModal
        onFundClose={() => {
          setisFundopen(false);
        }}
        isFundOpen={isFundopen}
      />
      <nav className="flex flex-col ">
        <div
          className={`py-6 bg-orange justify-center   flex items-center ${
            isAuthenticated ? " justify-between px-[300px] " : "gap-x-[96px] "
          }  `}
        >
          <div className="flex flex-row gap-x-[48px] items-center ">
            <div onClick={handleRootRedirect}>
              <Heading
                Variant={"h4"}
                text={"Acheter Code.FR"}
                className={
                  "text-white font-righteous text-[28px] font-normal cursor-pointer"
                }
              />
            </div>
            <div className="flex w-[395px] h-[57px] bg-white relative rounded-[16px] items-center ">
              <Input
                type={"text"}
                className={
                  "h-full w-[340px] rounded-[16px] px-5 outline-none font-nunito text-[18px] font-normal text-light_gray  "
                }
                placeholder={"Search what you need"}
              />
              <div className="w-[56px] h-full bg-light_orange  border-l-[1px] border-solid border-orange rounded-r-[16px] cursor-pointer flex flex-row items-center justify-center ">
                <CiSearch className="w-[28px] h-[28px] text-orange font-bold " />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-[50px] items-center ">
            <ul className="flex flex-row gap-x-[20px] ">
              <li>
                <NavLink className={"text-white font-nunito text-lg "} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={"text-white font-nunito text-lg "}
                  onClick={() => {
                    setisopen(true);
                  }}
                >
                  Purchase History
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-row items-center gap-x-5">
              <div className="flex flex-row gap-x-3">
                <div className="flex flex-row items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-transparent_black">
                  <IoIosCart className="w-5 h-5 text-white " />
                </div>
                <div
                  onClick={() => {
                    setisFundopen(true);
                  }}
                  className="flex flex-row items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-transparent_black"
                >
                  <ImCoinEuro className="w-5 h-5 text-white " />
                </div>
              </div>
              <div
                className={` flex flex-row items-center ${
                  isAuthenticated ? `justify-between` : " gap-x-4"
                }`}
              >
                {!isAuthenticated && (
                  <Link
                    className={"text-white font-nunito text-lg "}
                    to={"/login"}
                  >
                    Log In
                  </Link>
                )}
                {!isAuthenticated && (
                  <Button
                    onClick={() => {
                      handleRegister();
                    }}
                    className={
                      " p-4 border-[2px] border-solid border-white outline-none rounded-[16px] text-white font-nunito text-lg   "
                    }
                    text={
                      <div className="flex flex-row items-center text-white gap-x-2">
                        <FaRegUser className="w-5 h-5 text-lg font-bold text-white font-nunito " />{" "}
                        Sign Up{" "}
                      </div>
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-owl_black py-[26px] flex items-center justify-center  ">
          <ul className="flex flex-row gap-x-[32px]">
            {socailLinks.map((item, index) => {
              return (
                <li key={index}>
                  <div
                    onClick={() => {
                      handleFilterData(item.linkName);
                    }}
                    className={`text-[18px] font-medium font-nunito ease-in-out duration-150 cursor-pointer ${
                      item?.linkName === FilterCardnames
                        ? " text-white "
                        : "text-orange"
                    } `}
                  >
                    {" "}
                    {item.linkName}{" "}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
