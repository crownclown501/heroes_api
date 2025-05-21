// heroes-app\src\app\core\heroe-data.service.ts


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const API_TOKEN = '1b7b3ec81deded53b02e8b1781b51ff3';
const API_BASE_URL = `https://www.superheroapi.com/api.php/${API_TOKEN}`;

export interface Stats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Hero {
  id: string;
  name: string;
  powerstats: Stats;
  biography: any;
  appearance: any;
  work: any;
  connections: any;
  image: { url: string };
}

@Injectable({
  providedIn: 'root'
})
export class HeroDataService {
  [x: string]: any;

  constructor(private http: HttpClient) {}

  searchHeroes(name: string): Observable<Hero[]> {
    if (!name || name.trim() === '') return of([]);
    return this.http.get<any>(`${API_BASE_URL}/search/${name}`).pipe(
      map(response => response.results || []),
      catchError(() => of([])) // Si hay error (por ejemplo cuando no encuentre resultados o el token este mal o haya caducado), retorna array vacío
    );
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${API_BASE_URL}/${id}`);
  }
}
