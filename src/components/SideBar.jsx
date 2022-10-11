import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import "./SideBar.css";
import james from "./images/james.svg";
import ViewClient from "./ViewClient";

const SideBar = () => {
  const [isActiveView, setIsactiveview] = useState(false);
  const [isActiveAdd, setIsactiveadd] = useState(false);

  let switchView = () => {
    setIsactiveview(!isActiveView);
    setIsactiveadd(false);
  };

  let switchAdd = () => {
    setIsactiveadd(!isActiveAdd);
    setIsactiveview(false);
  };

  return (
    <div className="full__page">
      <div className="sidebar">
        <h2>Company name</h2>
        <div className="sidebar__search">
          <SearchIcon />
          <input
            type="text"
            id="sidebar__searchinput"
            placeholder="search modules"
          />
        </div>
        <p>
          <strong>Client Master</strong>
        </p>
        <div className="side__buttons">
          <button
            onClick={switchView}
            className={isActiveView ? "sidebar__Buttonblue" : "sidebar__Button"}
          >
            View Client
          </button>
          <button
            onClick={switchAdd}
            className={
              isActiveAdd && !isActiveView
                ? "sidebar__Buttonblue"
                : "sidebar__Button"
            }
          >
            Add client
          </button>
        </div>
        <div className="footer">
          <div className="profile">
            <img src={james} alt="" />
            <div className="profile__name">
              <p>
                {" "}
                <strong>James Burton</strong>{" "}
              </p>
              <p>iames@thvouch.digital</p>
            </div>
            <LogoutIcon className="logout__button" />
          </div>
        </div>
      </div>
      <div className="full__main">{isActiveView && <ViewClient />}</div>
    </div>
  );
};

export default SideBar;
