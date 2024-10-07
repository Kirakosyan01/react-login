import style from "./LoginForm.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { EyeSVG } from "../../Components/EyeSVG";
import { LoginNotCorrect } from "../../Components/LoginNotCorrect";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1728211799876.json";
import AnimatedPage from "../AnimatedPage/AnimatedPage";

export function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const [email, password] = e.target;
    const userLogin = {
      email: email.value,
      password: password.value,
    };
    if (location.state && Array.isArray(location.state)) {
      const userEmail = location.state.filter(
        (user) => user.email === userLogin.email
      );
      const user = userEmail.find(
        (user) => user.password === userLogin.password
      );
      if (user) {
        setErrorLogin(false);
        navigate("/Profile", { state: { user, allUsers: location.state } });
      } else {
        setErrorLogin(true);
      }
    } else if (location.state && typeof location.state === "object") {
      const user = location.state;
      if (
        user.email === userLogin.email &&
        user.password === userLogin.password
      ) {
        setErrorLogin(false);
        navigate("/profile", { state: { user, allUsers: location.state } });
      } else {
        setErrorLogin(true);
      }
    } else {
      setErrorLogin(true);
    }
  };

  const handleGoToRegistration = () => {
    navigate("/registration", { state: location.state });
  };

  return (
    <AnimatedPage>
    <div className={style.login__form}>
      <div className={style.bg_img}>
        <Lottie animationData={animationData} />
      </div>
      <div className={style.login_input}>
        <h1 className={style.log_in}>Log In</h1>
        <div className={style.login_input}>
          <form onSubmit={handleLoginSubmit} className={style.form}>
            <input type="text" name="email" placeholder="Email" required />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className={style.EyeSVG}
                onClick={handleShowPassword}
              >
                <EyeSVG />
              </button>
            </div>
            {errorLogin ? <LoginNotCorrect /> : null}
            <div className={style.have__acc}>
              <button type="submit">Log In</button>
              <button onClick={handleGoToRegistration}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
