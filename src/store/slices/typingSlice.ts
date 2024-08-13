import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypingState {
  text: string;
  userInput: string;
  currentIndex: number;
  errors: number;
  startTime: number | null;
  wpm: number;
  isCompleted: boolean;
}

const initialState: TypingState = {
  text: "Этот тренажер проверяет скорость вашей печати текста, пожалуйста, будьте внимательны при наборе данного текста, чем меньше ошибок, тем лучше",
  userInput: "",
  currentIndex: 0,
  errors: 0,
  startTime: null,
  wpm: 0,
  isCompleted: false,
};

const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    // Action для старта временного отсчета печати
    startTyping(state) {
      if (!state.startTime) state.startTime = Date.now();
    },

    // Action для проверки введенного символа и подсчета ошибок
    updateInput(state, action: PayloadAction<string>) {
      const newUserInput = action.payload;

      // Проверяем, стирает ли пользователь символ
      if (newUserInput.length < state.userInput.length) {
        state.currentIndex--;
        state.userInput = newUserInput;
        return;
      }

      const inputChar = newUserInput[state.currentIndex];
      if (state.currentIndex < state.text.length) {
        if (inputChar !== state.text[state.currentIndex]) {
          state.errors++;
        }
        state.currentIndex++;
        state.userInput = newUserInput;

        // Проверяем, завершил ли пользователь ввод текста
        if (state.currentIndex === state.text.length) {
          const timeSpent = (Date.now() - state.startTime!) / 60000;
          state.wpm = Math.round(state.text.length / 5 / timeSpent);
          state.isCompleted = true;
        }
      }
    },
    // Action для очистки состояния печати
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { startTyping, updateInput, reset } = typingSlice.actions;
export default typingSlice.reducer;
