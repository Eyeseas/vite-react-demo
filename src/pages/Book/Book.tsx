import style from "./Book.module.scss";
import { Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Book() {
  const [today, setToday] = useState(moment());
  const [showFlag, setShowFlag] = useState(false);

  const toggleBox = () => {
    setShowFlag(!showFlag);
  };

  return (
    <div id={style.book}>
      <div>
        <QuestionCircleOutlined />
        here is a book
      </div>
      <Button type="dashed" onClick={toggleBox}>
        ant design button
      </Button>
      <span>{today.format("YYYY-MM-DD HH:mm:ss")}</span>

      {/* {showFlag && (
        <div className={`animated bounceInLeft ${style.animateBox}`}></div>
      )} */}

      <CSSTransition
        in={showFlag}
        unmountOnExit
        onEnter={() => {
          console.log("enter");
        }}
        onExited={() => {
          console.log("exited");
        }}
        classNames={{
          enterActive:"animated bounceInUp",
          exitActive:"animated bounceOutDown"
        }}
        timeout={300}
      
      >
        <div className={`${style.animateBox}`}></div>
      </CSSTransition>
    </div>
  );
}

export default Book;
