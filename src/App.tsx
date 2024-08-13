import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";

import TextDisplay from "./components/TextDisplay/TextDisplay";
import { RootState } from "./store/store";
import ResultScreen from "./components/ResultScreen/ResultScreen";
import { useEffect, useState } from "react";

function App() {
  const { isCompleted } = useSelector((state: RootState) => state);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isCompleted && setIsOpen(true);
  }, [isCompleted]);

  return (
    <>
      <Header />
      <TextDisplay />
      {isOpen && <ResultScreen onClose={() => setIsOpen(!isOpen)} />}
    </>
  );
}

export default App;
