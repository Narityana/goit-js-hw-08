import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, data.seconds);
  console.log(`Current time is: ${data.seconds} seconds`);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(JSON.parse(localStorage.getItem(TIME_KEY)))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
