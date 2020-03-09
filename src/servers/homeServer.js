import {store} from '../redux/store'
import host from '../consts/host'

export const HomeServer = {
  getHijri: getHijri,
  getDuaOfTheMoment : getDuaOfTheMoment,
  getAyatOfTheMoment: getAyatOfTheMoment,
  getHadeesOfTheMoment: getHadeesOfTheMoment,
  getNameofAllah, getNameofAllah,
  getQuranicWord, getQuranicWord

}
export function getHijri(date){
    fetch('http://api.aladhan.com/v1/gToH?date='+date , {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
    }).then(response => {
      response.json().then(data => {
          
        const DateHijri = {day :data.data.hijri.day, month :  data.data.hijri.month.en, year: data.data.hijri.year}
        store.dispatch({type: 'SaveHijri', payload: DateHijri })
      });
    });
}

export function getDuaOfTheMoment(){
  fetch(host + '/duaofthemoment',{
    method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
  }).then(response => {
    response.json().then(data => 
      
      {
        store.dispatch({type: 'duaOfTheMoment', payload: data[0] })})
  })
}

export function getAyatOfTheMoment(){
  fetch(host + '/ayatofthemoment',{
    method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
  }).then(response => {
    response.json().then(data => 
      
      {
        store.dispatch({type: 'ayatOfTheMoment', payload: data[0] })})
  })
}

export function getHadeesOfTheMoment(){
  fetch(host + '/hadeesofthemoment',{
    method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
  }).then(response => {
    response.json().then(data => 
      {
        store.dispatch({type: 'hadeesOfTheMoment', payload: data[0] })})
  })
}

export function getNameofAllah(){
  fetch(host + '/namesofAllah',{
    method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
  }).then(response => {
    response.json().then(data => 
      {
        store.dispatch({type: 'nameOfAllah', payload: data[0] })})
  })
}

export function getQuranicWord(){
  fetch(host + '/quranicwords',{
    method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      mode: 'cors',
  }).then(response => {
    response.json().then(data => 
      {
        store.dispatch({type: 'quranicWord', payload: data[0] })})
  })
}

