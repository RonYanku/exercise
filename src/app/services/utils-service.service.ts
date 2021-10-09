import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor() { }

  public reverseString(str: string) {
    console.log('here')
    return str?.split('').reverse().join('');
  }
}
