const showNotification = (setter: any) => {
  setter(true);

  setTimeout(() => {
    setter(false);
  }, 2000);
};

const checkWin = (correct: string[], wrong: string[], word: any) => {
  let status = "win";

  word.split("").forEach((letter: string) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  if (wrong.length === 6) {
    status = "lose";
  }

  return status;
};

export { showNotification, checkWin };
