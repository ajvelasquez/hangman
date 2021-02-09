import React, { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import { showNotification as show } from "./helpers/helpers";
import Popup from "./components/Popup";
import Notification from "./components/Notification";

const words = ["application", "programing", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters: string[]) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters: string[]) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const playAgain = () => {
    setPlayable(true);

    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  };

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        selectedWord={selectedWord}
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
