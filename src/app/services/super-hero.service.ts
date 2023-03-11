import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = 'SuperHero';

  constructor(private http: HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.baseApiUrl}/${this.url}`);
  }

  public updateHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(`${environment.baseApiUrl}/${this.url}`, hero);
  }

  public createHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${environment.baseApiUrl}/${this.url}`, hero);
  }

  public deleteHero(hero: SuperHero) : Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${environment.baseApiUrl}/${this.url}/${hero.id}`);
  }
}
