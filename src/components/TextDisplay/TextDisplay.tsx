import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import styles from "./textDisplay.module.css";
import TextInput from "../TextInput/TextInput";

function TextDisplay() {
  const { text, userInput, currentIndex, isCompleted } = useSelector(
    (state: RootState) => state
  );
  const textDisplay = useMemo(() => {
    return text.split("").map((char, index) => {
      let checking: boolean | undefined;
      if (index < userInput.length) {
        checking = char === userInput[index];
      }

      const colorClass =
        checking === undefined
          ? styles.text
          : checking
          ? styles.textCorrect
          : styles.textIncorrect;

      return (
        <span key={index} className={`${colorClass} ${styles.position}`}>
          {currentIndex === index && <span className={styles.cursor}></span>}
          {char}
        </span>
      );
    });
  }, [text, userInput, currentIndex]);

  return (
    <div className={styles.container}>
      {!isCompleted && (
        <div className={styles.box}>
          <div className={`${styles.chars}`}>{textDisplay}</div>
        </div>
      )}
      <TextInput />
    </div>
  );
}

export default TextDisplay;
