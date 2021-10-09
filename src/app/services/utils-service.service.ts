import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

  constructor() { }

  public reverseString(str: string) {
    return str?.split('').reverse().join('');
  }
}
