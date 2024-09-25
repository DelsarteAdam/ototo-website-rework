import { Outlet } from "react-router-dom";
import SocialStickyLink from "../components/SocialStickyLink";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <SocialStickyLink />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
