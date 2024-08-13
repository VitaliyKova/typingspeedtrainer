import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./resultScreen.module.css";

interface ResultScreenProps {
  onClose: () => void;
}

function ResultScreen({ onClose }: ResultScreenProps) {
  const { wpm, errors } = useSelector((state: RootState) => state);

  return ReactDOM.createPortal(
    <div className={styles.modalBg}>
      <div className={styles.modal}>
        <h1>Результаты</h1>
        <div className={`${styles.result} ${styles.green}`}>
          <p>Cкорость</p>
          <p>{wpm} символов/мин</p>
        </div>
        <div className={`${styles.result} ${styles.red}`}>
          <p>Опечаток</p>
          <p>{errors}</p>
        </div>
        <button className={styles.button} onClick={onClose}>
          x
        </button>
      </div>
    </div>,
    document.getElementById("tonel")!
  );
}

export default ResultScreen;
