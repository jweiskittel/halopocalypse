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
export class MetadataService {

  constructor(private http: HttpClient) {}

  getCampaignMissions() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/campaign-missions', {
      headers: headers
    });
  }

  getCSRDesignations() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/csr-designations', {
      headers: headers
    });
  }

  getEnemies() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/enemies', {
      headers: headers
    });
  }

  getGameBaseVariants() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/game-base-variants', {
      headers: headers
    });
  }

  getMaps() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/maps', {
      headers: headers
    });
  }

  getPlaylists() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/playlists', {
      headers: headers
    });
  }

  getSeasons() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/seasons', {
      headers: headers
    });
  }

  getVehicles() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/vehicles', {
      headers: headers
    });
  }

  getWeapons() {
    return this.http.get('https://www.haloapi.com/metadata/h5/metadata/weapons', {
      headers: headers
    });
  }

}
