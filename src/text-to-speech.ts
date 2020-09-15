export function textToSpeech(text: string) {
  return new Promise(res => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ru";
    utterance.addEventListener("end", function onEnd() {
      res();
      utterance.removeEventListener("end", onEnd);
    });
    speechSynthesis.speak(utterance);
  });
}
