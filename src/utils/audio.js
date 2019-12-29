import { getSoundURL } from './sounds';

let ctx;

const getAudioContext = () => {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
};

/**
 * Creates a function to set the volume on the
 * passed gain node
 *
 * @param {*} gainNode
 */
const setVolume = gainNode =>
  /**
   * Sets the volume value on the bound gain node
   */
  newVolume => (gainNode.gain.value = newVolume / 10);

/**
 * Request audio at the given url and
 * resolve with the given fn onload
 *
 * @param {string} audioURL
 * @param {function} resolve
 */
const getRequest = (audioURL, resolve) => {
  const soundReq = new XMLHttpRequest();
  soundReq.open('GET', audioURL, true);
  soundReq.responseType = 'arraybuffer';
  const context = getAudioContext();
  soundReq.onload = () => {
    context.decodeAudioData(soundReq.response).then(data => {
      const audioBuffer = data;
      const audioBufferSource = context.createBufferSource();
      audioBufferSource.buffer = audioBuffer;
      audioBufferSource.connect(context.destination);
      audioBufferSource.loop = true;

      // construct and connect gain node to control volume
      const gainNode = context.createGain();
      audioBufferSource.connect(gainNode);
      gainNode.connect(context.destination);

      audioBufferSource.start();

      // resolve audio object with api
      return resolve({
        url: audioURL,
        setVolume: setVolume(gainNode)
      });
    });
  };
  return soundReq;
};

/**
 * Creates an audio request, sends it and
 * resolves it with the passed resolve fn
 *
 * @param {string} soundId: id of sound to init
 * @param {Function} resolve: fn to call when audio request completed
 */
export const initialiseAudio = async (soundId, resolve) => {
  const url = getSoundURL(soundId);
  getRequest(url, resolve).send();
};
