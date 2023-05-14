import { Outlet } from "react-router-dom";

import MainNavigation from "../components/root/MainNavigation";
import Footer from "../components/root/Footer";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
