import style from './IsDelete.module.css';

export function IsDelete ({ handleCancel, handleDelete }) {
    return (
        <div className={style.delete_overlay__div}>
        <div className={style.delete_div}>
          <div className={style.delete__is_sure}>
            <div>Are you sure?</div>
            <div>
              Do you really want to delete this account? This process cannot
              be undone.
            </div>
          </div>
          <div className={style.delete_choice}>
            <div>
              <button className={style.delete_choice__no} onClick={handleCancel}>Cancel</button>
            </div>
            <div>
              <button className={style.delete_choice__yes} onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
}