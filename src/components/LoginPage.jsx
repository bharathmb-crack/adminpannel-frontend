import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="loginpage">
      <div className="login__container">
        <div className="login__welcomecontainer">
          <img
            id="image-logo"
            src="https://cdn-icons-png.flaticon.com/512/919/919827.png?w=826&t=st=1665216524~exp=1665217124~hmac=263719b8e21afb44fe84484a0951ed742f690cee16fd6160a4c18b381d25fd07"
            alt=""
          />
          <h1>
            {" "}
            <strong>Welcome</strong>{" "}
          </h1>
          <p>Enter your Username and Password.</p>
        </div>
        <form action="">
          <div className="login__userinfo">
            <div className="userinfo__username">
              <PersonIcon style={{ color: "#939596", margin: "1%" }} />
              <input type="text" id="username" placeholder="Username" />
            </div>
            <div className="userinfo__password">
              <LockIcon style={{ color: "#939596", margin: "1%" }} />
              <input type="text" id="username" placeholder="Password" />
            </div>
            <button type="submit" id="loginButton">
              Login
            </button>
            <p>
              {" "}
              <strong>Forgot Password?</strong>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
