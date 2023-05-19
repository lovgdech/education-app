import React from "react";

import NewsChildren from "../components/home/News";
import Interact from "../components/home/Interact";
import Notification from "../components/home/Notification";
import Dedication from "../components/home/Dedication";

const News = () => {
  return (
    <div
      style={{
        maxWidth: "1180px",
        width: "100%",
        margin: "auto",
        display: "flex",
        padding: "50px 15px 0",
      }}
    >
      <NewsChildren />
      <div style={{ flex: "1", marginLeft: "20px" }}>
        <Interact />
        <Notification />
        <Dedication />
      </div>
    </div>
  );
};

export default News;
