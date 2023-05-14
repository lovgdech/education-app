import React from "react";

import Banner from "../components/home/Banner";
import Industry from "../components/home/Industry";
import Slidebar from "../components/home/Slidebar";
import News from "../components/home/News";
import Form from "../components/home/Form";

const Home = () => {
  return (
    <>
      <Banner />
      <div style={{ maxWidth: "1180px", width: "100%", margin: "auto" }}>
        <Industry />
        <div style={{ display: "flex" }}>
          <div style={{ flex: "2", marginRight: "20px" }}>
            <News />
            <Form />
          </div>
          <Slidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
