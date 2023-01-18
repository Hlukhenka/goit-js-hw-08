import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_DATA_PLAYER = 'videoplayer-current-time';
const time = localStorage.getItem(TIME_DATA_PLAYER);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(TIME_DATA_PLAYER, seconds);
  }, 1000)
);


player.setCurrentTime(time);
