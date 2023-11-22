import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    saveCurrentTime(currentTime);
  }, 1000)
);
const saveCurrentTime = time => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
};
const getCurrentTime = () => {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  return storedTime ? JSON.parse(storedTime) : 0;
};
player.setCurrentTime(getCurrentTime());

player
  .getCurrentTime()
  .then(function (seconds) {
    const currentTime = seconds;
    saveCurrentTime(currentTime);
  })
  .catch(function (error) {
    console.error('An error occurred:', error);
  });
