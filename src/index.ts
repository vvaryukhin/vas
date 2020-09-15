import { debounce } from "utils";

const button = getByRole("button");
const container = getByRole("speech-results");

button && container && makeSpeechRecognition(button, container);

const onPause = debounce(1000, function (string) {
  console.log("pause", string);
  listenToText();
});

type MessageType = "user" | "bot";

const resultsArray: {
  text: string;
  timestamp: number;
  from: MessageType;
}[] = [];

function makeSpeechRecognition(button: Element, _textContainer: Element) {
  let listening = false;

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  button.addEventListener("click", onButtonClick);
  recognition.addEventListener("result", onResult);
  recognition.lang = "ru";

  function onButtonClick() {
    if (listening) {
      stop();
      button.textContent = "start recording";
    } else {
      start();
      button.textContent = "stop recording";
    }
  }

  function start() {
    listening = true;
    recognition.start();
  }

  function stop() {
    listening = false;
    recognition.stop();
    console.log(resultsArray);
  }

  function onResult(e: SpeechRecognitionEvent) {
    console.log(e);
    let string = "";
    for (const res of e.results) {
      const transcription = res[0].transcript;
      string += transcription;
      if (res.isFinal) {
        const now = Date.now();
        if (!resultsArray.find(({ text }) => text === transcription)) {
          resultsArray.push({
            text: transcription,
            timestamp: now,
            from: "user",
          });
        }
      }
    }
    _textContainer.textContent = string;
    onPause(string);
  }
}

function listenToText() {
  if (resultsArray[resultsArray.length - 1].from === "bot") return;
  const msg = `Передам сообщение, представленное ниже, что-то еще?`;
  const utterance = new SpeechSynthesisUtterance(msg);
  resultsArray.push({ text: msg, timestamp: Date.now(), from: "bot" });
  utterance.lang = "ru";
  speechSynthesis.speak(utterance);
}

function getByRole(role: string) {
  return document.querySelector(`[data-role="${role}"]`);
}
