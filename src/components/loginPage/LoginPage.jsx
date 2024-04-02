import Styles from "./LoginPage.module.css";
import { useState } from "react";

const LoginPage = ({ onHandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleLogin({ email, password });
    setPassword("");
  };

  return (
    <div className={Styles.login_container}>
      <form className={Styles.login_form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={Styles.input_group}>
          <label htmlFor="email">Username</label>
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
      </form>
    </div>
  );
};

export default LoginPage;
