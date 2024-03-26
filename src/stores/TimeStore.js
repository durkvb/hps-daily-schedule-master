import { readable } from 'svelte/store';

export let time = readable(new Date(), function start(set) {
  let interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});