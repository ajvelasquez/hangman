import React from "react";

interface Props {
  wrongLetters: string[];
}

const WrongLetters = ({ wrongLetters }: Props) => {
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 ? <p>Wrong</p> : ""}
          {wrongLetters
            .map((letter: string, i: number) => <span key={i}>{letter}</span>)
            .reduce(
              (prev: any, current: any) =>
                prev === null ? [current] : [prev, ", ", current],
              null
            )}
        </div>
      </div>
    </>
  );
};

export default WrongLetters;
