//import React from 'react';
import fetchJsonp from 'fetch-jsonp'
 
export function getJson():Promise<any>{
  const API_URL:string = 'https://api.petfinder.com/pet.getRandom';
  const format:string = 'json';
  const key:string = '6200ef1ed210ddf2e2119b86863496db';
  const output:string = 'full';
  const animal:string = 'dog';

  return fetchJsonp(`${API_URL}?key=${key}&animal=${animal}&output=${output}&format=${format}`)
  .then(response => {
    if(response.ok){
      console.log(response.json());
      return response.json();
    }else 
      throw Error('Response not 200!');
  })
  .catch(function(err) {
    console.warn(err);
  })
}

