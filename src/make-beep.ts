import beepSound from "assets/audio/beep.mp3";
import lineIsBusySound from "assets/audio/line-is-busy.mp3";
import haveAGoodDaySound from "assets/audio/have-a-good-day.mp3";
import savedMessageSound from "assets/audio/saved-message.mp3";

function makeSoundPlayer(sound: string) {
  const audio = new Audio(sound);
  return function playSound() {
    return new Promise(res => {
      audio.addEventListener("ended", function onEnd() {
        res();
        audio.removeEventListener("ended", onEnd);
      });
      audio.play();
    });
  };
}

export const playBeep = makeSoundPlayer(beepSound);
export const playLineIsBusy = makeSoundPlayer(lineIsBusySound);
export const playHaveAGoodDay = makeSoundPlayer(haveAGoodDaySound);
export const playSavedMessageSound = makeSoundPlayer(savedMessageSound);
