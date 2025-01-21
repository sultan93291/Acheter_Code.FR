import { NavLink, useNavigate } from "react-router-dom";
import Heading from "../Components/Tags/Heading/Heading";
import Paragraph from "../Components/Tags/Paragraph/Paragraph";
import { useEffect, useState } from "react";
import {
  setActiveFilterCardName,
  setFilterCardData,
} from "@/redux/features/filterCardSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";



const Footer = () => {
  const FilterCardnames = useSelector(
    state => state.filterCardDataSlice.activeFilterCardName
  );
  const navigate = useNavigate();
  const handleRootRedirect = () => {
    navigate("/");
  };

  const dispatch = useDispatch();

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

  useEffect(() => {
    handleFilterData(FilterCardnames);
  }, [location, FilterCardnames]);

  const handleFilterData = FilterCardname => {
    if (location.pathname === "/") {
      dispatch(setActiveFilterCardName(FilterCardname));

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
    }
  };

  return (
    <footer className="flex relative flex-col px-2 md:px-0 bg-owl_black md:items-center pt-[40px] gap-y-[34px] after:absolute after:content-[''] after:w-full  after:bottom-0 after:left-0 after:h-[1px] after:mb-[68px] after:bg-[#D9EDF4] ">
      <div onClick={handleRootRedirect}>
        <Heading
          Variant={"h4"}
          text={"Acheter Code.FR"}
          className={
            " font-righteous text-[20px] md:text-[28px] font-normal text-orange cursor-pointer "
          }
        />
      </div>
      <ul className="flex flex-row flex-wrap gap-[12px] lg:gap-x-[32px] md:px-2 2xl:px-0  ">
        {socailLinks.map((item, index) => {
          return (
            <li key={index}>
              <div
                onClick={() => {
                  handleFilterData(item.linkName);
                }}
                className={` text-[12px] md:text-[14px] 2xl:text-[16px] 3xl:text-lg  font-medium font-nunito ease-in-out duration-150 cursor-pointer ${
                  item?.linkName === FilterCardnames
                    ? " text-orange "
                    : "text-white"
                } `}
              >
                {" "}
                {item.linkName}{" "}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="py-6 ">
        <Paragraph
          className={" text-[14px] md:text-[16px] text-white font-nunito"}
          text={"  © 2024 Logoipsum Systems. All rights reserved"}
        />
      </div>
    </footer>
  );
};

export default Footer;
