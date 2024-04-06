import { NavLink, useNavigate } from "react-router-dom";
import Styles from "./LoginPage.module.css";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

const LoginPage = ({ onHandleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleLogin({ email, password });
    setLoader(true);
    setPassword("");

    setTimeout(() => {
      navigate("/");
      setLoader(false);
    }, 2000);
  };

  if (loader) {
    return (
      <div className={Styles.loader_login}>
        <Oval visible={true} width="50" color="#0056b3" strokeWidth="4" />
      </div>
    );
  }

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
