import React, { useState } from "react";
import { Login } from "../components/Login";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.value) {
    }
  };
  return (
    <div>
      <Login
        handlechange={handleChange}
        email={email}
        pass={password}
        onsubmit={handleSubmit}
      />
    </div>
  );
};
