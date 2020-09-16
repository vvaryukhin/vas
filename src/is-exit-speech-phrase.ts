const exitPhrases = [
  "все",
  "нет",
  "хватит",
  "довольно",
  "закончил",
  "достаточно",
  "больше ничего",
  "остановись",
  "стоп",
  "перестань",
].map(v => new RegExp(v, "gi"));

export function isExitSpeechPhrase(_phrase: string) {
  const phrase = _phrase.replace(/ё/i, "е");
  return exitPhrases.some(phraseRegex => phraseRegex.test(phrase));
}
