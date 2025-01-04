import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Input } from "../Components/Input/Input";
import Heading from "../Components/Tags/Heading/Heading";
import { CiSearch } from "react-icons/ci";
import { IoIosCart } from "react-icons/io";
import { ImCoinEuro } from "react-icons/im";
import Button from "../Components/Tags/Button/Button";
import { FaRegUser } from "react-icons/fa6";


const Navbar = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register");
  };

  const location = useLocation();
  console.log(location.pathname);
  

  const socailLinks = [
    {
      linkName: "STEAM",
      redirects: "/",
    },
    {
      linkName: "GOOGLE STORE",
      redirects: "/",
    },
    {
      linkName: "APPLE STORE",
      redirects: "/",
    },
    {
      linkName: "XBOX",
      redirects: "/",
    },
    {
      linkName: "PLAYSTATION",
      redirects: "/",
    },
    {
      linkName: "FORTNITE",
      redirects: "/",
    },
    {
      linkName: "ROBLOX",
      redirects: "/",
    },
    {
      linkName: "MINECRAFT",
      redirects: "/",
    },
    {
      linkName: "PC",
      redirects: "/",
    },
    {
      linkName: "MOBILE",
      redirects: "/",
    },
  ];

  return (
    <nav className="flex flex-col ">
      <div className="py-6 bg-orange justify-center  flex gap-x-[96px] items-center ">
        <div className="flex flex-row gap-x-[48px] items-center ">
          <Heading
            Variant={"h4"}
            text={"Acheter Code.FR"}
            className={"site_logo"}
          />
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
              <NavLink
                className={"text-white font-nunito text-lg "}
                to={"/home"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"text-white font-nunito text-lg "}
                to={"/purchase"}
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
              <div className="flex flex-row items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-transparent_black">
                <ImCoinEuro className="w-5 h-5 text-white " />
              </div>
            </div>
            <div className="flex flex-row items-center gap-x-4">
              <Link className={"text-white font-nunito text-lg "} to={"/"}>
                Log In
              </Link>
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
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-owl_black py-[26px] flex items-center justify-center  ">
        <ul className="flex flex-row gap-x-[32px]">
          {socailLinks.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={`text-[18px] font-medium font-nunito ${location?.pathname === item.redirects ?" text-orange " : "text-white" } `}
                  to={item.redirects}
                >
                  {" "}
                  {item.linkName}{" "}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
