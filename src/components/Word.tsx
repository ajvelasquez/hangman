import React from "react";

interface Props {
  selectedWord: string;
  correctLetters: string[];
}

const Word = ({ selectedWord, correctLetters }: Props) => {
  return (
    <>
      <div className="word">
        {selectedWord.split("").map((letter: string, i: number) => (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        ))}
      </div>
    </>
  );
};

export default Word;
