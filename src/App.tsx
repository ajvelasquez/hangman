import React, { useEffect, useState } from "react";
import "./App.css";
import Figure from "./components/Figure";
import Header from "./components/Header";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

const words = ["application", "programing", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (!!letter && selectedWord.includes(letter)) {
          if (!!letter && !correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters: string[]) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            // showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters: string[]) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            // showNotification();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </div>
  );
}

export default App;
