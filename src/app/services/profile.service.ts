import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

const APIKEY = environment.APIKEY;
let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Accept-Language', 'en');
headers = headers.append('Ocp-Apim-Subscription-Key', APIKEY);

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(gamertag: string) {
    return this.http.get(`https://www.haloapi.com/profile/h5/profiles/${gamertag}/appearance`, {
      headers: headers
    });
  }

  getEmblem(gamertag: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://www.haloapi.com/profile/h5/profiles/${gamertag}/emblem`, {
      headers: headers
    });
  }

  getSpartan(gamertag: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://www.haloapi.com/profile/h5/profiles/${gamertag}/spartan`, {
      headers: headers
    });
  }
}
