import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// API endpoint
const baseURL = 'http://192.168.33.10:8080/api/players';
const statsURL = 'http://192.168.33.10:8080/api/stats';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  headElements = [
    "player_id",
    "name",
    "nationality",
    "position",
    "overall",
    "age",
    "hits",
    "potential",
    "team"
  ]
  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get(baseURL, {params});
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  getStats(type: string): Observable<any> {
    return this.http.get(`${statsURL}/${type}`);
  }
}
