import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect, useRef } from "react";
import { startTyping, updateInput } from "../../store/slices/typingSlice";
import styles from "./textInput.module.css";
import RestartButton from "../RestartButton/RestartButton";

function TextInput() {
  const dispatch: AppDispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "";
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(startTyping());
    dispatch(updateInput(value));
  };

  const handleRestart = () => {
    if (inputRef.current) {
      inputRef.current.value = "";  // Очищаем поле ввода
      inputRef.current.focus();     // Устанавливаем фокус на поле ввода
    }
  };

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        onChange={handleInputChange}
        className={styles.hidden}
        autoComplete="off"
      />
      <div className={styles.button} onClick={handleRestart}>
        <RestartButton />
      </div>
    </>
  );
}

export default TextInput;
