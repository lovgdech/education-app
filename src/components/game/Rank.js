import React from "react";

import styles from "./Rank.module.css";

const Rank = (props) => {
  return (
    <div className={styles.rank}>
      <h3>Bảng xếp hạng</h3>
      <table className={styles.highscoretable}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Mã sinh viên</th>
            <th>Tên</th>
            <th>Lớp</th>
            <th className="date-column">Ngày chơi</th>
            <th>Số bước</th>
            <th>Loại</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            if (index === 14) return <></>;
            else
              return (
                <tr key={Math.random()}>
                  <td>{index + 1}</td>
                  <td>{item.studentId}</td>
                  <td className={styles.name}>{item.name}</td>
                  <td className={styles.class}>{item.class}</td>
                  <td>{item.date}</td>
                  <td>{item.move}</td>
                  <td>
                    {item.gameId === 0
                      ? "3x3"
                      : item.gameId === 1
                      ? "4x4"
                      : "5x5"}
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
      <button onClick={props.fetchRankingUserHander}>Làm mới</button>
    </div>
  );
};

export default Rank;
