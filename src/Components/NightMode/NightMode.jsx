import { div } from "framer-motion/client";
import style from "./NightMode.module.css";

export function NightMode({ nightToggled, setNightToggled }) {
  return (
    <div className={style.NightMode}>
      <button
        className={`${style.toggle_btn} ${nightToggled ? style.toggled : ""}`}
        onClick={() => setNightToggled(!nightToggled)}
      >
        <div className={style.thumb}></div>
      </button>
    </div>
  );
}
