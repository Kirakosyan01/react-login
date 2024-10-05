import style from "./EditForm.module.css";

export function EditForm({ user, handleEditCancel, handleEditUpdate }) {
  return (
    <div className={style.EditForm__overlay}>
      <div className={style.EditForm}>
        <div>
          <form onSubmit={handleEditUpdate}>
            <div className={style.div_1}>
              <div>First Name:</div>
              <input type="text" defaultValue={user.fname} />
            </div>
            <div className={style.div_1}>
              <div>Second Name:</div>
              <input type="text" defaultValue={user.sname} />
            </div>
            <div className={style.div_1}>
              <div>Email:</div>
              <input type="text" defaultValue={user.email} />
            </div>
            <div className={style.div_1}>
              <div>Phone:</div>
              <input type="text" defaultValue={user.phone} />
            </div>
            <div className={style.div_1}>
              <div>Password:</div>
              <input type="text" defaultValue={user.password} />
            </div>
            <button className={style.update__btn} type="submit">Update</button>
            <button className={style.cancel__btn} onClick={handleEditCancel} type="button">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
