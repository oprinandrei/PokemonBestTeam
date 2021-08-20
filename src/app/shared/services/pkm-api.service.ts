import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PkmApiService {
  // Using https://pokeapi.co/

  constructor(private http: HttpClient) { }

  private defaultApiPath = 'https://pokeapi.co/api/v2/';

  getPokemon(name: string): Observable<any> {
    return this.http.get(this.defaultApiPath + 'pokemon/' + name);
  }

  // https://pokeapi.co/docs/v2#encounters-section
  getEncounterMethod(name?: string, id?: number) {}

  // https://pokeapi.co/docs/v2#evolution-chains
  getEvolutionChain(name?: string, id?: number) {}

  // https://pokeapi.co/docs/v2#evolution-triggers
  getEvolutionTriggers(name?: string, id?: number) {}
}
