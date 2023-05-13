import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

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
