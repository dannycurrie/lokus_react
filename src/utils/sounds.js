const soundsPath = '/audio/';
const soundFormat = 'wav';

export const sounds = {
  lokus: 'lokus'
};

/**
 * Given a sound id, returns a url for
 * the identified sound
 *
 * @param {string} soundId
 */
export const getSoundURL = soundId => {
  if (soundId in sounds) {
    return `${soundsPath}${soundId}.${soundFormat}`;
  }
  console.warn(`unrecognised sound ${soundId}`);
  return null;
};
