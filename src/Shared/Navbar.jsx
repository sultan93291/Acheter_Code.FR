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
import { FaUserPlus } from "react-icons/fa6";
import {
  setFilterCardData,
  setActiveFilterCardName,
} from "@/redux/features/filterCardSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { setUserBalences } from "@/redux/features/CartSlice";
import { MdLogout } from "react-icons/md";
import { setLoggedInUserData } from "@/redux/features/loggedInUserSlice";
import { Image } from "@/Components/Tags/Image/Image";
import { toast } from "react-toastify";


const Navbar = () => {
  const [isopen, setisopen] = useState(false);
  const [isFundopen, setisFundopen] = useState(false);
  const FilterCardnames = useSelector(
    state => state.filterCardDataSlice.activeFilterCardName
  );


  const loggedInUserData = useSelector(
    state => state.loggedInUserSlice.loggedInUserData
  );

  console.log(loggedInUserData);

  const SiteURl = import.meta.env.VITE_SITE_URL;

  const [suggestion, setsuggestion] = useState();
  const [isSuggestion, setisSuggestion] = useState(false);
  const suggestionRef = useRef();

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
  }, [location, FilterCardnames]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target)
      ) {
        setisSuggestion(false);
      }
    }

    // Attach the event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log(suggestion);

  const handleSearchData = filterData => {
    navigate(`/search/?filter=${filterData}`);
    window.reload();
  };

  const setUserBalence = () => {
    const SiteURl = import.meta.env.VITE_SITE_URL;
    const token = localStorage.getItem("token");

    axios({
      method: "get",
      url: `${SiteURl}/api/users/user-balance`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log(res?.data?.data?.balance, "i'm usere balence");
        dispatch(setUserBalences(res?.data?.data?.balance));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleFilterData = FilterCardname => {
    if (location.pathname === "/") {
      dispatch(setActiveFilterCardName(FilterCardname));

      axios({
        method: "get",
        url: `${SiteURl}/api/filter/cards?platform=${FilterCardname}`,
      })
        .then(res => {
          dispatch(setFilterCardData(res?.data?.data));
        })
        .catch(err => {
          console.log(err);
        });
    }
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.info("Sucessfully logged out")
    setTimeout(() => {
       navigate("/login");
       window.location.reload();
    }, 2000);
   
  };

  const handleProfileUpload = event => {
    const file = event.target.files[0]; // Get the selected file
    console.log(file); // Logs the file object to verify the file is being picked up
    const token = localStorage.getItem("token");

    // Create a FormData object
    const formData = new FormData();
    formData.append("avatar", file); // Add the file to FormData
    console.log("full from data", formData);

    axios({
      method: "POST",
      url: `${SiteURl}/api/users/update-avatar`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        console.log('updated data', res.data.data);
        console.log(res.status , 'success status');
        if (res.status === 200) {
          toast.success("Successfully updated avatar")
        }
       dispatch(setLoggedInUserData(res?.data?.data));
      })
      .catch(err => {
        console.log(err);
        toast.error("Can't update updated avatar");
      });
  };

  console.log("");

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
          className={`py-6 bg-orange justify-center relative   flex items-center ${
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
            <div
              onClick={() => {
                setisSuggestion(true);
              }}
              className="flex w-[395px]  h-[57px] bg-white relative rounded-[16px] items-center "
            >
              <Input
                type={"text"}
                className={
                  "h-full w-[340px] rounded-[16px] px-5 outline-none font-nunito text-[18px] font-normal text-light_gray  "
                }
                placeholder={"Search what you need"}
                defaultValue={suggestion ? suggestion : ""}
              />
              <div className="w-[56px] h-full bg-light_orange border-l-[1px] border-solid border-orange rounded-r-[16px] cursor-pointer flex flex-row items-center justify-center group">
                <CiSearch className="w-[28px] h-[28px] text-orange font-bold ease-in-out duration-300 group-hover:rotate-[90deg] " />
              </div>
              {isSuggestion && (
                <div
                  ref={suggestionRef}
                  className="h-[101px] ease-in duration-150 w-[340px] top-0 left-0 mt-[70px] z-[99999] bg-[#FFF6E6] absolute shadow-custom_shadow   "
                >
                  <div
                    onClick={event => {
                      event.stopPropagation(); // Prevent propagation to the document listener
                      setsuggestion("Sale vouchers");
                      setisSuggestion(false);
                      handleSearchData("Sale vouchers");
                    }}
                    className="h-[49px] w-full px-8 py-3 text-[#5c5c5c] cursor-pointer text-lg font-normal font-nunito "
                  >
                    Sale vouchers
                  </div>
                  <hr className="bg-orange h-[1px] w-full border-none" />
                  <div
                    onClick={event => {
                      event.stopPropagation(); // Prevent propagation to the document listener
                      setsuggestion("Gift cards");
                      setisSuggestion(false);
                      handleSearchData("Gift cards");
                    }}
                    className="h-[49px] w-full  px-8 py-3 text-[#5c5c5c] cursor-pointer text-lg font-normal font-nunito "
                  >
                    Gift cards
                  </div>
                </div>
              )}
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
                <div
                  className={"text-white font-nunito text-lg cursor-pointer "}
                  onClick={() => {
                    setisopen(true);
                  }}
                >
                  Purchase History
                </div>
              </li>
            </ul>
            <div className="flex flex-row items-center gap-x-5">
              <div className="flex flex-row gap-x-3">
                <div
                  onClick={() => {
                    navigate("/checkout");
                  }}
                  className="flex flex-row items-center justify-center w-12 h-12 rounded-full cursor-pointer ease-in duration-200 bg-transparent_black hover:bg-[rgba(255,255,255,0.2)] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.1)] "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M2.98512 14.6249C2.19067 11.4472 1.79345 9.85921 2.62771 8.79069C3.46197 7.72217 5.09993 7.72217 8.37493 7.72217H12.662C15.9379 7.72217 17.5749 7.72217 18.4092 8.79069C19.2435 9.85921 18.8462 11.4481 18.0518 14.6249C17.5462 16.6462 17.2944 17.6564 16.5407 18.2453C15.787 18.8333 14.7453 18.8333 12.662 18.8333H8.37493C6.2916 18.8333 5.24993 18.8333 4.49623 18.2453C3.74252 17.6564 3.48975 16.6462 2.98512 14.6249Z"
                      stroke="white"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M17.4592 8.18512L16.8018 5.77308C16.5481 4.84253 16.4212 4.37771 16.1611 4.02679C15.9016 3.67814 15.5493 3.40957 15.1444 3.25179C14.737 3.09253 14.2555 3.09253 13.2925 3.09253M3.57031 8.18512L4.22772 5.77308C4.48142 4.84253 4.60828 4.37771 4.86846 4.02679C5.12788 3.67814 5.48021 3.40957 5.88513 3.25179C6.29253 3.09253 6.77402 3.09253 7.73698 3.09253"
                      stroke="white"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M7.73438 3.09255C7.73438 2.84698 7.83193 2.61147 8.00557 2.43782C8.17922 2.26418 8.41473 2.16663 8.6603 2.16663H12.364C12.6096 2.16663 12.8451 2.26418 13.0187 2.43782C13.1924 2.61147 13.2899 2.84698 13.2899 3.09255C13.2899 3.33812 13.1924 3.57364 13.0187 3.74728C12.8451 3.92093 12.6096 4.01848 12.364 4.01848H8.6603C8.41473 4.01848 8.17922 3.92093 8.00557 3.74728C7.83193 3.57364 7.73438 3.33812 7.73438 3.09255Z"
                      stroke="white"
                      strokeWidth="1.3"
                    />
                  </svg>
                </div>
                <div
                  onClick={() => {
                    setisFundopen(true);
                    setUserBalence();
                  }}
                  className="flex flex-row items-center justify-center w-12 h-12 ease-in-out duration-200 rounded-full cursor-pointer bg-transparent_black hover:bg-[rgba(255,255,255,0.2)] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)] "
                >
                  <ImCoinEuro className="w-5 h-5 text-white " />
                </div>
              </div>
              {isAuthenticated ? (
                <div className="h-[55px] w-[120px] bg-[#FFF6E6] shadow-custom_shadow   rounded-[16px] flex flex-row justify-between items-center px-4 ">
                  <div
                    aria-label="Profile upload"
                    className=" cursor-pointer  relative  "
                  >
                    {loggedInUserData.avatar ? (
                      <Image
                        Src={`${SiteURl}/${loggedInUserData?.avatar}`}
                        AltTxt={"not found"}
                        className={
                          "h-[35px] w-[35px] rounded-[35px] ring-1 shadow-custom_shadow object-cover "
                        }
                      />
                    ) : (
                      <FaUserPlus
                        title="profile upload"
                        className="h-[20px] w-[20px] text-gray-600 cursor-pointer "
                      />
                    )}
                    <Input
                      type={"file"}
                      accept={"image/*"}
                      className={
                        "absolute top-0 left-0 h-[25px] w-[25px] opacity-0 cursor-pointer "
                      }
                      onChange={e => {
                        handleProfileUpload(e);
                      }}
                    />
                  </div>

                  <div
                    role="button"
                    aria-label="Log out"
                    className=" flex flex-row h-full pl-4 items-center border-l-[1px] border-solid border-orange  "
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <MdLogout
                      title="log out"
                      className="h-[20px] w-[20px] text-gray-600 cursor-pointer "
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={` flex flex-row items-center ${
                    isAuthenticated ? `justify-between` : " gap-x-4"
                  }`}
                >
                  {!isAuthenticated && (
                    <Link
                      className={"text-white font-nunito text-lg  "}
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
                        "p-4 border-[2px] border-solid border-white outline-none rounded-[16px] text-white font-nunito text-lg ease-in-out duration-200 bg-transparent hover:bg-orange hover:shadow-[0px_4px_10px_rgba(0,0,0,0.2)] hover:border-transparent transform hover:-translate-y-[1px]"
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
              )}
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
