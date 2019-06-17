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
export class MapsService {

  constructor(private http: HttpClient) {
   }

   getMaps() {
     return this.http.get('https://www.haloapi.com/metadata/h5/metadata/maps', {
        headers: headers
     });
   }

}
