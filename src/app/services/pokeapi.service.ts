import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }
}
