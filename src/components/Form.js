import React from "react";

import styles from "./Form.module.css";

const Form = () => {
  const contactSubmitHandler = (e) => {
    alert("Gửi thành công!");
    e.preventDefault();
  };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <h3>Liên hệ & góp ý</h3>
      </div>
      <div className={styles.body}>
        <form onSubmit={contactSubmitHandler}>
          <div className={styles.verification}>
            <div className={styles["form-control"]}>
              <label>Tên</label>
              <input type="text" name="name" />
            </div>
            <div className={styles["form-control"]}>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className={styles["form-control"]}>
            <label>Website</label>
            <input type="text" name="website" />
          </div>
          <div className={styles["form-control"]}>
            <label>Nội dung</label>
            <textarea name="content" rows="7" />
          </div>
          <button type="submit">Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
