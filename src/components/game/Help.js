/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ReactDOM from "react-dom";

import styles from "./Help.module.css";
import HelpImg from "../../assets/images/step-finish.png";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const Helpper = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3>Hướng dẫn</h3>
        <div className={styles.close} onClick={props.onChangeHelp}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className={styles.content}>
        <p>
          Trò chơi giải đố hình ảnh dựa trên một hình ảnh được chọn sẵn sau đó
          được chia thành các ô được xáo trộn 3x3, 4x4, 5x5. Để di chuyển các ô
          bạn sẽ click vào các ô cạnh ô trống (trên, dưới, trái, phải) để đổi
          chổ cho ô trống, cứ như vậy cho đến khi các ô được sắp xếp đúng vào
          các vị trí trò chơi sẽ hoàn thành. Mục tiêu bạn cần chú ý là hoàn
          thành trò chơi với số lần đổi chổ ít nhất!
        </p>
        <p>
          Đối với các gợi ý trong khi giải đố, các ô được đánh dấu bằng đường
          viền bên trong khi chúng được đặt vào đúng vị trí. Bạn có thể chạy trò
          chơi với các ô 3×3, 4×4 hoặc 5×5. Bất kể kích thước của lưới là gì,
          phần khó của trò chơi là đặt các ô 3x3 dưới cùng bên phải vào đúng vị
          trí. Có những chiến lược đơn giản cho việc này. Xem nếu bạn có thể tìm
          ra nó! Dưới đây một ví dụ mà bạn có thể tham khảo!
        </p>
        <p>
          Giải thích về ví dụ của chúng tôi. Ở đây chung tôi đã thay tấm ảnh
          bằng các ô được đánh số từ 1 đên 8 và được làm nổi bật với tông màu
          vàng. Đôi với ô trống chúng tôi sẽ không đánh số và đánh dấu bằng tông
          màu trắng. Bắt đầu trò chơi thứ tự các ô sẽ được sáo trộn.
        </p>
        <p>
          Mục tiêu của chúng tôi là liên tục đổi chỗ các ô để đưa các ô về đúng
          vị trí. Bắt đầu từ ô số 1 đến ô số 8. Bức ảnh dưới là mình họa cách
          thức đổi chổ của chúng tôi. Mỗi bước sẽ biểu diễn cho quy trình đưa
          mỗi ô về đúng vị trí. Bạn có thểm xem qua để tham khảo.
        </p>

        <img src={HelpImg} alt="image" />
        <p>Thứ tự click lần lượt là: 4 8 2 3 8 6 5 8 6 5 8</p>
        <p>
          Tất nhiền mỗi lần chơi các ô sẽ được xáo trộn khác biệt. Số lần đổi
          chỗ sẽ tùy thuộc vào sự xáo trộn của các ô và bạn. Chúc các bạn hoàn
          thành trò chơi với số bước ít nhất!
        </p>
      </div>
    </div>
  );
};

const Help = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Helpper onChangeHelp={props.onChangeHelp} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default Help;
