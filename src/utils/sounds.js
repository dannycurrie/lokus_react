const soundsPath = '/audio/';
const soundFormat = 'wav';

export const sounds = {
  piano: 'piano',
  LR_Pianos: 'LR_Pianos',
  arp: 'arp',
  synths: 'synths',
  swells: 'swells',
};

/**
 * Given a sound id, returns a url for
 * the identified sound
 *
 * @param {string} soundId
 */
export const getSoundURL = (soundId) => {
  if (soundId in sounds) {
    return `${soundsPath}${soundId}.${soundFormat}`;
  }
  console.warn(`unrecognised sound ${soundId}`);
  return null;
};
