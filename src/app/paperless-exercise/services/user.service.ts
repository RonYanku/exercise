import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserData {
  firstName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = 'http://httpbin.org';

  constructor(private http: HttpClient) {}

  //post user data
  public postUserData(firstName: string, email: string) {
    const userData: UserData = { firstName: firstName, email: email };
    return this.http.post<any>(this.url + '/post', userData, {
      observe: 'response',
    });
  }
}
