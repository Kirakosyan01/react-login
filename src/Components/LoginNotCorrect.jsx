import { Link } from "react-router-dom";
import style from "../pages/LoginForm/LoginForm.module.css";

export function LoginNotCorrect() {
  return (
    <div className={style.notFound}>
      The email you entered isn’t connected to an account.{" "}
      <span>
        <Link to="/registration">Create a new account.</Link>
      </span>
    </div>
  );
}
