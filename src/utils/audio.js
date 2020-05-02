import { Howl } from 'howler';
import { getSoundURL } from './sounds';

export const initialiseAudio = (soundId) =>
  new Howl({
    src: [getSoundURL(soundId)],
    html5: true,
    loop: true,
    volume: 0,
  });
