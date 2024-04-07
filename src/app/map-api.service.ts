import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapApiService {

  constructor(private http: HttpClient) {}


  getPlaceName(latitude: number, longitude: number) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    return this.http.get(url, {
      headers: {
        'User-Agent': 'YourAppName',
        'Accept': 'application/json'
      }
    });
  }


}
