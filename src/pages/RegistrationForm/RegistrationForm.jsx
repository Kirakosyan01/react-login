import style from "./RegistrationForm.module.css";
import BgImg from "../../images/regist_png.avif";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { EyeSVG } from "../../Components/EyeSVG";
import Lottie from "lottie-react";
import animationData from '../../assets/Animation - 1728213938956.json';

export function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.state) {
      setUserInfo(location.state);
    }
  }, [location]);


  const handleGoToRegistration = () => {
    navigate("/", { state: userInfo });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const [fname, sname, email, phone, password] = e.target;
    const newUser = {
        fname: fname.value,
        sname: sname.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
      };
      const updatedUserInfo = [...userInfo, newUser];
      setUserInfo(updatedUserInfo);
      navigate("/", { state: updatedUserInfo }); 
  };

  return (
    <div className={style.registration_form}>
      <div className={style.bg_img}>
        <Lottie animationData={animationData}/>
      </div>
      <div className={style.resistration_input}>
      <div>
        <h1>Create Account</h1>
      </div>
        <form onSubmit={handleSubmit} className={style.form}>
            <div className={style.fname}>
          <input
            type="text"
            name="fname"
            placeholder="Your first name"
            required
          />
          <input
            type="text"
            name="sname"
            placeholder="Your second name"
            required
          />
            </div>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone"
            required
          />
          <div className={style.password__div}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
          />
        <button type="button" className={style.EyeSVG} onClick={handleShowPassword}><EyeSVG /></button>
          </div>
          <div className={style.privacy}>
                    <input type="checkbox" name="privacy" value="privacy" required/>
                    <label htmlFor="privacy">I agree to the <span>Terms</span> and <span>Privacy policy</span></label>
          </div>
          <div className={style.have__acc}>
          <button type="submit" className={style.sign_up}>Sign Up</button>
        <button onClick={handleGoToRegistration}>
          Sign In
        </button>
          </div>
        </form>
      </div>
    </div>
  );
} 