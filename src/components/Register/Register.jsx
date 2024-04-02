import React, { useState } from "react";
import Styles from "./Register.module.css";
import { NavLink } from "react-router-dom";

const Register = ({ onHandleRegister }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleRegister({ email, name, password });

    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className={Styles.register_container}>
      <form className={Styles.register_form} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className={Styles.input_group}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={Styles.input_group}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={Styles.input_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className={Styles.have_or_not}>
          <p>Already have an account?</p>{" "}
          <NavLink to="/">
            <span>Log in</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
