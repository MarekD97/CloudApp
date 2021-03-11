import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8080/api/players';
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

  getAll(): Observable<any> {
    return this.http.get(baseURL);
  }
}
