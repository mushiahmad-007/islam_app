import { store } from '../redux/store';
import host from '../consts/host';

export const HadithServer = {
  getHadithByNo: getHadithByNo,
  getHadithByUrdu: getHadithByUrdu,
  getBookBaabs: getBookBaabs,
  getHadithByBaab:getHadithByBaab,
  getHadithByEnglish:getHadithByEnglish,

};

export function getHadithByNo(book, number) {
  fetch(host + '/hadeesbynumber/' + book + '/' + number, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    mode: 'cors',
  }).then(response => {
    response.json().then(data => {
      store.dispatch({ type: 'hadiths', payload: data});
    });
  });
}

export function getHadithByUrdu(book, urdu) {
    fetch(host + '/hadeesbyurdu/' + book + '/' + urdu, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
        store.dispatch({ type: 'hadiths', payload: data});
      });
    });
  }
export function getHadithByEnglish(book, english) {
    fetch(host + '/hadeesbyenglish/' + book + '/' + english, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
        store.dispatch({ type: 'hadiths', payload: data});
      });
    });
  }
  export function getHadithByBaab(book, baab) {
    fetch(host + '/hadeesbybaab/' + book + '/' + baab, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
        store.dispatch({ type: 'hadiths', payload: data});
      });
    });
  }

  
  export function getBookBaabs(book) {
    fetch(host + '/bookbaab/' + book , {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
        store.dispatch({ type: 'baabs', payload: data});
      });
    });
  }