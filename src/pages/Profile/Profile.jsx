import { useLocation, useNavigate } from "react-router-dom";
import style from "./Profile.module.css";
import { useEffect, useState } from "react";
import userProfile from "../../images/userProfile.avif";
import { EyeSVG } from "../../Components/EyeSVG.jsx";
import astro from "../../images/illustrations_astronaut_kevin.png";
import { IsDelete } from "../../Components/IsDelete/IsDelete.jsx";
import { EditForm } from "../../Components/EditForm/EditForm.jsx";
import { IsExit } from "../../Components/IsExit/IsExit.jsx";

export function Profile() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, allUsers } = location.state || {};

  const handleEditUpdate = (e) => {
    e.preventDefault();
    const [fname, sname, email, phone, password] = e.target;
    const updatedUser = {
      fname: fname.value,
      sname: sname.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    };
    const updatedUsers = allUsers.map((u) =>
      u.email === user.email && u.password === user.password
        ? updatedUser
        : u
    );
    setIsEditing(false);
    navigate('/Profile', {state: {user: updatedUser, allUsers: updatedUsers}})
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleIsExit = () => {
    setIsExit(true);
  }

  const handleSignOut = () => {
    navigate("/", { state: allUsers });
  };
  const handleEditCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    const updatedUsers = allUsers.filter(
      (item) =>
        item.email !== user.email || item.password !== user.password
    );

    navigate("/", { state: updatedUsers });
  };
  const handleIsDelete = () => {
    setIsDelete(true);
  };
  const handleCancel = () => {
    setIsDelete(false);
  };
  const handleIsEditing = () => {
    setIsEditing(true);
  };
  const handleIsExitCancel = () => {
    setIsExit(false);
  }

  return (
    <div className={style.profile_page}>
      {isExit ? (
        <IsExit handleSignOut={handleSignOut} handleIsExitCancel={handleIsExitCancel}/>
      ) : null}
      {isDelete ? (
        <IsDelete handleCancel={handleCancel} handleDelete={handleDelete} />
      ) : null}
      {isEditing ? (
        <EditForm
          user={user}
          handleEditCancel={handleEditCancel}
          handleEditUpdate={handleEditUpdate}
        />
      ) : null}
      <div className={style.exit_div}>
        <button onClick={handleIsExit} type="button">
          Log Out
        </button>
      </div>
      <div className={style.profile_main}>
        <img src={userProfile} width={300} alt="" />
        <h3>{user && user.fname}</h3>
        <h3>{user && user.sname}</h3>
      </div>
      <div className={style.profile_info}>
        <img src={astro} className={style.astro} alt="" />
        <div className={style.div_2}>
          <div className={style.div_2}>
            <div></div>
            <div className={style.div_2}>
              <div className={style.div_1}>
                <div className={style.user_elements}>
                  <div>First Name:</div>
                  <div>{user.fname}</div>
                </div>
                <div className={style.user_elements}>
                  <div>Second Name:</div>
                  <div>{user && user.sname}</div>
                </div>
              </div>
              <div className={style.div_1}>
                <div className={style.user_elements}>
                  <div>Email:</div>
                  <div>{user && user.email}</div>
                </div>
                <div className={style.user_elements}>
                  <div>Phone:</div>
                  <div>{user && user.phone}</div>
                </div>
              </div>
              <div className={style.user_element}>
                <div>Password:</div>
                <div className={style.EyeSVG_div}>
                  <button
                    type="button"
                    className={style.EyeSVG}
                    onClick={handleShowPassword}
                  >
                    <EyeSVG />
                  </button>
                  <input
                    className={style.passBtn}
                    type={showPassword ? "text" : "password"}
                    value={user && user.password}
                  />
                  <button
                    type="button"
                    className={style.delete_btn}
                    onClick={handleIsDelete}
                  >
                    Delete Account
                  </button>
                  <button
                    onClick={handleIsEditing}
                    className={style.update_btn}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
