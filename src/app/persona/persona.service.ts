import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persona';
import { map } from 'rxjs/operators';

@Injectable()

export class PersonaService {

  private urlEndPoint: string = 'http://localhost:7171/api/findAllPersonas';
  
  constructor( private http: HttpClient) { }

  getPersonas() : Observable<Persona[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Persona[])
    );
  }

}
