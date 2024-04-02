import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./LoginPage.module.css";
import { useState } from "react";

const LoginPage = ({ onHandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    onHandleLogin({ email, password });
    setPassword("");
  };

  return (
    <div className={Styles.login_container}>
      <form className={Styles.login_form} onSubmit={handleSubmit}>
        <h2>Login</h2>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div className={Styles.have_or_not}>
          <p>Don't have an account?</p>{" "}
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
