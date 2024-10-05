import style from './IsExit.module.css';

export function IsExit({ handleSignOut, handleIsExitCancel }) {
    return (
        <div className={style.IsExit_overlay}>
            <div className={style.IsExit}>
                <div className={style.IsExit_text}>
                    Are you sure you want to log out ?
                </div>
                <div className={style.exit_buttons}>
                    <button onClick={handleSignOut}>Log Out</button>
                    <button onClick={handleIsExitCancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}