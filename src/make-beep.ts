import beepSound from "assets/audio/beep.mp3";

const audio = new Audio(beepSound);

export function makeBeep() {
  return new Promise(res => {
    audio.addEventListener("ended", function onEnd() {
      res();
      audio.removeEventListener("ended", onEnd);
    });
    audio.play();
  });
}
