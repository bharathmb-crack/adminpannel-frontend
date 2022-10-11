import React, { useState } from "react";
import "./BottomButtons.css";

const BottomButtons = ({ value, tag, changeclick, backcolor, color }) => {
  const [isActivebutton, setIsactivebutton] = useState(false);

  return (
    <div className="nextnumber">
      <div className="numbers__buttons">
        <button
          onClick={() => {
            setIsactivebutton(!isActivebutton);
            changeclick = !changeclick;
          }}
          className={
            `${changeclick}` && isActivebutton
              ? "button_withblue"
              : "button_withoutcolor"
          }
          style={{ backgroundColor: `${backcolor}`, color: `${color}` }}
        >
          {tag}
          {value}
        </button>
      </div>
    </div>
  );
};

export default BottomButtons;
