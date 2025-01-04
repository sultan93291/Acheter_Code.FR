import { NavLink, useNavigate } from "react-router-dom";
import Heading from "../Components/Tags/Heading/Heading";
import Paragraph from "../Components/Tags/Paragraph/Paragraph";


const Footer = () => {
  const navigate = useNavigate();
   const handleRootRedirect = () => {
     navigate("/");
   };

  
  const socailLinks = [
    {
      linkName: "PRODUCTS",
      redirects: "/",
    },
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
      linkName: "CART",
      redirects: "/",
    },
  ];
  return (
    <footer className="flex relative flex-col bg-owl_black items-center pt-[40px] gap-y-[34px] after:absolute after:content-[''] after:w-full  after:bottom-0 after:left-0 after:h-[1px] after:mb-[68px] after:bg-[#D9EDF4] ">
      <div onClick={handleRootRedirect} >
        <Heading
          Variant={"h4"}
          text={"Acheter Code.FR"}
          className={"site_logo text-orange cursor-pointer "}
        />
      </div>
      <ul className="flex flex-row gap-x-[32px] relative  ">
        {socailLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                className={"text-[18px] font-medium font-nunito text-white "}
                to={item.redirects}
              >
                {" "}
                {item.linkName}{" "}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="py-6 ">
        <Paragraph
          className={"text-[16px] text-white font-nunito"}
          text={"  © 2024 Logoipsum Systems. All rights reserved"}
        />
      </div>
    </footer>
  );
};

export default Footer;
