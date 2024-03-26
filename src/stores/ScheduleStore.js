import { writable } from 'svelte/store';
import axios from 'axios';

export const hhsSched = writable({}, async (set) => {
  const res = await axios.get(
    'https://my-json-server.typicode.com/durkvb/hps-schedule-data/hhs'
  );

  set(res.data);
})

export const hmsSched = writable({}, async (set) => {
  const res = await axios.get('https://my-json-server.typicode.com/durkvb/hps-schedule-data/hms')

  set(res.data);
});