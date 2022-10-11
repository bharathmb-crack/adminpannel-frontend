import React, { useState } from "react";
import "./ViewClient.css";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import BlockIcon from "@mui/icons-material/Block";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { tablearray } from "./data";
import BottomButtons from "./BottomButtons";
const ViewClient = () => {
  const [isthreedot, setIsthreedot] = useState(false);

  return (
    <div className="viewclient">
      <div className="viewclinet__header">
        <div className="header__textContainer">
          <h1>View Clients</h1>
          <div className="header__client">
            <span>
              <p>Client Master</p>
            </span>
            <span>/</span>
            <span className="view">
              <p>View Clients</p>
            </span>
          </div>
        </div>
        <NotificationsNoneIcon style={{ color: "#686687" }} />
      </div>

      <div className="viewclient__maintable">
        <div className="viewclient__container">
          <div className="maintable__searchcontainer">
            <div className="searchcontainer__search">
              <SearchIcon />
              <input
                type="text"
                id="maintable_searchinput"
                placeholder="search"
              />
            </div>
            <div className="maintable__export">
              <div className="export__column">
                <select name="column" id="">
                  <option value="column">column</option>
                </select>
              </div>
              <button className="export__button">
                <DownloadIcon style={{ fontSize: "14px" }} />
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="maintable__tablecontainer">
          <table>
            <tr className="table__header">
              <th>Company Name</th>
              <th>Email Addresh</th>
              <th>Phone Number</th>
              <th>Contact Person</th>
              <th>Facitlator</th>
              <th>Sites</th>
              <th>Tenants</th>
              <th>Tenants group</th>
              <th>Actions</th>
            </tr>
            {tablearray &&
              tablearray.map((n) => (
                <tr key={n.id}>
                  <td>
                    <div className="name__logo">
                      <img src={n.image} alt="" />
                      <p>{n.name}</p>
                    </div>
                  </td>
                  <td>{n.email}</td>
                  <td>{n.phone}</td>
                  <td>{n.contPerson}</td>
                  <td>{n.facilitator}</td>
                  <td>{n.sites}</td>
                  <td>{n.tenants}</td>
                  <td>{n.tenantgroups}</td>
                  <td
                    onClick={() => {
                      n.actionShow = !n.actionShow;
                      setIsthreedot(!isthreedot);
                      console.log(n.actionShow);
                    }}
                    className="three-dot"
                  >
                    {n.action}{" "}
                    {n.actionShow && isthreedot && (
                      <div className="menucontainer">
                        <div>
                          <VisibilityIcon style={{ color: "grey" }} />
                          <p>View Details</p>
                        </div>
                        <div>
                          <ModeEditIcon style={{ color: "grey" }} />
                          <p>Edit</p>
                        </div>
                        <div>
                          <BlockIcon style={{ color: "grey" }} />
                          <p> Block Access</p>
                        </div>
                        <div>
                          <DeleteForeverIcon style={{ color: "grey" }} />
                          <p>Delete</p>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
          </table>
        </div>
        <div className="bottom__container">
          <div className="bottom__buttons">
            <BottomButtons value={"1"} changeclick={false} />
            <BottomButtons value={"2"} changeclick={false} />
            <BottomButtons value={"..."} />
            <BottomButtons value={"48"} changeclick={false} />
            <BottomButtons value={"49 "} changeclick={false} />
            <BottomButtons value={"50"} changeclick={false} />
          </div>
          <div className="next__button">
            <BottomButtons
              value={"Previous"}
              backcolor={"white"}
              color={"grey"}
              tag={<ArrowBackIosIcon />}
            />
            <BottomButtons
              value={"Next"}
              tag={<ArrowForwardIosIcon />}
              color={"grey"}
              backcolor={"#F5F5F5"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewClient;
