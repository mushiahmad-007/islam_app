import { store } from '../redux/store';
import host from '../consts/host';

export const SurahServer = {
    getSurah : getSurah,
    getAyat : getAyat,
    getParah: getParah,
}
export function getSurah(surahTitle) {
  fetch(host + '/surah/' + surahTitle, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    mode: 'cors',
  }).then(response => {
    response.json().then(data => {
      store.dispatch({ type: 'surah', payload: data });
    });
  });
}
export function getAyat(surah, ayat) {
    fetch(host + '/ayat/'+ surah+ '/'+ ayat, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
        store.dispatch({ type: 'surah', payload: data });
      });
    });
  }

  export function getParah(parahTitle) {
    fetch(host + '/parah/' + parahTitle, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
        store.dispatch({ type: 'surah', payload: data });
      });
    });
  }