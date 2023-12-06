import { Outlet } from "react-router-dom";
import Navbar from "../module/Navbar";
import Footer from "../module/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
export default Layout;
