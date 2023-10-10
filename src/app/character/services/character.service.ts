import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, ResponseAllCharacters } from '../interfaces/character.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getCharacters(): Observable<ResponseAllCharacters>{

    const url = `${this.baseUrl}/character`

    return this.http.get<ResponseAllCharacters>( url );
  }

  getOneCharacter( id: number ): Observable<Character>{
    const url = `${this.baseUrl}/character/${id}`;

    return this.http.get<Character>( url );
  }
}
