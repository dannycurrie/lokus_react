import { Howl } from 'howler';
import { getSoundURL } from './sounds';

export const initialiseAudio = (soundId) => {
  const url = getSoundURL(soundId);
  return new Howl({
    src: [url],
    html5: true,
    autoplay: true,
    loop: true,
  });
};
