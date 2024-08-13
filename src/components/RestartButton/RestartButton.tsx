import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { reset } from "../../store/slices/typingSlice";
import styles from "./restartButton.module.css"

function RestartButton() {
    const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <button className={styles.button} onClick={() => dispatch(reset())}>Повторить упражнение</button>
    </>
  )
}

export default RestartButton
