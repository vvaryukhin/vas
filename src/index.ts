import { debounce } from "utils";

const button = getByRole("button");
const container = getByRole("speech-results");
declare global {
  interface Window {
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

button && container && makeSpeechRecognition(button, container);

const onPause = debounce(1000, function () {
  console.log("pause");
});

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
  }

  function onResult(e: SpeechRecognitionEvent) {
    for (const res of e.results) {
      console.log(res[0].transcript);
      // const text = document.createTextNode(res[0].transcript);
      // const p = document.createElement("p");
      // p.appendChild(text);
      // textContainer.appendChild(p);
    }
    onPause();
  }
}

function getByRole(role: string) {
  return document.querySelector(`[data-role="${role}"]`);
}
