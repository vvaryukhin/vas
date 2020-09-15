export {};

declare global {
  interface Window {
    webkitSpeechRecognition: typeof SpeechRecognition;
  }

  declare module "*.mp3" {
    const src: string;
    export default src;
  }
}
