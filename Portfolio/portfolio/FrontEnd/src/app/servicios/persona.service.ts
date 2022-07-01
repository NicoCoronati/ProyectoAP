import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})


export class PersonaService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'http://localhost:8080/personas/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getPersona(): Observable<persona>{

    return this.http.get<persona>(this.URL+'traer/perfil/1');

  }
}
