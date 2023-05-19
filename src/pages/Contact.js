import React from "react";

import Form from "../components/home/Form";
import ContactInfo from "../components/contact/ContactInfo";
import Interact from "../components/home/Interact";

const Contact = () => {
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
      <div style={{ marginRight: "20px", flex: "2" }}>
        <Form element={ContactInfo} />
      </div>
      <div style={{ flex: "1" }}>
        <Interact />
      </div>
    </div>
  );
};

export default Contact;
