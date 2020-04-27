import { sounds } from './sounds';
import { initialiseAudio } from './audio';

const getRandomInRange = (from, to, fixed) =>
  (Math.random() * (to - from) + from).toFixed(fixed) * 1;

const getRandomLatLong = () => ({
  lat: getRandomInRange(-90, 90, 4),
  long: getRandomInRange(-180, 180, 4),
});

export default () =>
  Object.values(sounds).map((sound) => {
    const { lat, long } = getRandomLatLong();
    return {
      sound: initialiseAudio(sound),
      lat,
      long,
      key: sound,
    };
  });
