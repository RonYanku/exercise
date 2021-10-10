import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  // reverse a string
  public reverseString(str: string) {
    return str?.split('').reverse().join('');
  }
}
