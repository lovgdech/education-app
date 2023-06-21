import { useState } from "react";

import styles from "./EnterName.module.css";

const EnterName = (props) => {
  const [enteredStudentId, setenteredStudentId] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredClass, setEnteredClass] = useState("");

  const idInputChangeHanler = (e) => {
    setenteredStudentId(e.target.value);
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
      studentId: enteredStudentId,
      name: enteredName,
      class: enteredClass,
    };
    props.onAddRankingsUser(inputValue);
    alert("Submit success!");
    setEnteredClass("");
    setenteredStudentId("");
    setEnteredName("");
  };

  return (
    <div className={styles["enter-name"]}>
      <form onSubmit={formsubmissionHandler}>
        <div>
          <div className={styles["form-control"]}>
            {/* <label htmlFor="id">Mã sinh viên</label> */}
            <input
              type="text"
              id="id"
              onChange={idInputChangeHanler}
              value={enteredStudentId}
              placeholder="Nhập mã sinh viên"
            />
          </div>
          <div className={styles["form-control"]}>
            {/* <label htmlFor="name">Tên</label> */}
            <input
              type="text"
              id="name"
              onChange={nameInputChangeHanler}
              value={enteredName}
              placeholder="Tên"
            />
          </div>
        </div>
        <div>
          <div className={styles["form-control"]}>
            {/* <label htmlFor="class">Lớp</label> */}
            <input
              type="text"
              id="class"
              onChange={classInputChangeHanler}
              value={enteredClass}
              placeholder="Lớp"
            />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EnterName;
