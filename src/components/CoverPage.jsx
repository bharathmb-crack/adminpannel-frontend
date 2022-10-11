import React from "react";
import "./CoverPage.css";
import box from "./images/box.svg";

const CoverPage = () => {
  return (
    <div className="coverpage">
      <img src={box} alt="" />
      <div className="coverpage__content">
        <h1>360° Solution for Asset Management</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
          aliquam libero dolor exercitationem repellat ut commodi, illum ipsum
          doloribus reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default CoverPage;
