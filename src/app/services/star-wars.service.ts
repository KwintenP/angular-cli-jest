import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class StarWarsService {

  constructor(private http: Http) { }

  getStarWarsCharacter(id: string) {
    return this.http.get('https://swapi.co/api/people/' + id)
      .map(response => response.json());
  }

}
