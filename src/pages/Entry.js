import React, { useState } from "react";
import { Login } from "../components/Login";
import { ResetPass } from "../components/ResetPass";

export const Entry = () => {
  //state of email & password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state of toggle forms
  const [frmLogin, setFrmLogin] = useState("login");

  //handle the changes of textfields
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  //function which do toggle between forms
  const frmSwicther = (frm) => {
    setFrmLogin(frm);
  };

  // submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.value) {
    }
  };
  return (
    <div>
      {frmLogin === "login" && (
        <Login
          handlechange={handleChange}
          email={email}
          pass={password}
          onsubmit={handleSubmit}
          formSwitch={frmSwicther}
        />
      )}
      {frmLogin === "reset" && (
        <ResetPass
          handlechange={handleChange}
          email={email}
          pass={password}
          onsubmit={handleSubmit}
          formSwitch={frmSwicther}
        />
      )}
    </div>
  );
};
