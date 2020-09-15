const exitPhrases = [
  "у меня все",
  "хватит",
  "нет спасибо",
  "я закончил",
  "довольно",
  "достаточно",
].map(v => new RegExp(v, "gi"));

export function isExitSpeechPhrase(phrase: string) {
  return exitPhrases.some(phraseRegex => phraseRegex.test(phrase));
}
