import { useState } from "react";

import styles from "./EnterName.module.css";

const EnterName = (props) => {
  const [enteredId, setEnteredId] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredClass, setEnteredClass] = useState("");

  const idInputChangeHanler = (e) => {
    setEnteredId(e.target.value);
  };
  const nameInputChangeHanler = (event) => {
    setEnteredName(event.target.value);
  };
  const classInputChangeHanler = (event) => {
    setEnteredClass(event.target.value);
  };

  const formsubmissionHandler = (e) => {
    e.preventDefault();
    const inputValue = {
      id: enteredId,
      name: enteredName,
      class: enteredClass,
    };
    props.onAddRankingsUser(inputValue);
    setEnteredClass("");
    setEnteredId("");
    setEnteredName("");
  };

  return (
    <div className={styles["enter-name"]}>
      <form onSubmit={formsubmissionHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="id">Mã sinh viên</label>
          <input
            type="text"
            id="id"
            onChange={idInputChangeHanler}
            value={enteredId}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="name">Tên</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHanler}
            value={enteredName}
          />
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="class">Lớp</label>
          <input
            type="text"
            id="class"
            onChange={classInputChangeHanler}
            value={enteredClass}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnterName;
