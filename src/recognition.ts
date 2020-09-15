interface IRecognitionServiceOptions {
  lang?: "ru" | "en";
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (e: SpeechRecognitionEvent) => void;
}

export function makeRecognitionService({
  lang = "ru",
  continuous = true,
  interimResults = true,
  onResult = () => {},
}: IRecognitionServiceOptions = {}) {
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = lang;
  recognition.continuous = continuous;
  recognition.interimResults = interimResults;
  recognition.addEventListener("result", onResult);
  return recognition;
}
