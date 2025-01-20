import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import AosProvider from "@/Provider/AosProvider/AosProvider";

const Layout = () => {
  return (
    <>
      <AosProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </AosProvider>
    </>
  );
};

export default Layout;
