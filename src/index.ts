import {
  playBeep,
  playHaveAGoodDay,
  playLineIsBusy,
  playSavedMessageSound,
} from "make-beep";
// import { textToSpeech } from "text-to-speech";
import { appendChild, debounce, getByRole, last, render } from "utils";
import { makeRecognitionService } from "recognition";
import { isExitSpeechPhrase } from "is-exit-speech-phrase";

import "assets/styles/index.scss";

interface ISpeechResult {
  text: string;
  timestamp: number;
  from: MessageAuthor;
}

type MessageAuthor = "user" | "bot";

const useVoiceCheck = getByRole("use-voice");
const button = getByRole("button");
const container = getByRole("speech-results");

button &&
  container &&
  useVoiceCheck &&
  makeSpeechRecognition(button, container, useVoiceCheck);

const resultsArray: ISpeechResult[] = [];

function makeSpeechRecognition(
  button: Element,
  textContainer: Element,
  useVoiceCheck: Element
) {
  let listening = false;
  let useVoice = true;
  const recognition = makeRecognitionService({ onResult });

  useVoiceCheck.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    useVoice = target.checked;
  });
  button.addEventListener("click", onButtonClick);

  async function onButtonClick() {
    if (listening) {
      stop();
    } else {
      await playLineIsBusy();
      await playBeep();
      start();
    }
  }

  function addSpeechResult({ text, timestamp, from }: ISpeechResult) {
    resultsArray.push({
      text,
      timestamp,
      from,
    });
    const textElement = render(
      "p",
      {
        style: {
          background: "#eee",
          maxWidth: "80%",
          padding: "5px",
          marginBottom: "5px",
          borderRadius: "3px",
          alignSelf: from === "user" ? "flex-end" : "flex-start",
        },
      },
      [text]
    );
    appendChild(textContainer, textElement);
  }

  function start() {
    listening = true;
    textContainer.innerHTML = "";
    resultsArray.length = 0;
    recognition.start();
    button.textContent = "Закончить разговор";
  }

  function stop() {
    listening = false;
    recognition.stop();
    button.textContent = "Начать разговор";
    console.log(resultsArray);
  }

  function onResult(e: SpeechRecognitionEvent) {
    if (!listening) return;
    for (const res of e.results) {
      const transcription = res[0].transcript;
      if (res.isFinal) {
        if (!resultsArray.find(({ text }) => text === transcription)) {
          const now = Date.now();
          addSpeechResult({
            text: transcription,
            timestamp: now,
            from: "user",
          });
        }
      }
    }

    const lastResult = last(e.results);
    if (lastResult.isFinal && isExitSpeechPhrase(lastResult[0].transcript)) {
      onPause(true);
    } else {
      onPause();
    }
  }

  const onPause = debounce(1000, function (isExit = false) {
    respondToUser(isExit);
  });

  async function respondToUser(isExit: boolean) {
    if (last(resultsArray).from === "bot") return;
    const msg = isExit ? "Хорошего дня!" : `Передам сообщение, что-то еще?`;
    console.log(msg, isExit);
    addSpeechResult({ text: msg, timestamp: Date.now(), from: "bot" });
    if (useVoice) {
      await (isExit ? playHaveAGoodDay() : playSavedMessageSound());
    }
    isExit && stop();
  }
}
