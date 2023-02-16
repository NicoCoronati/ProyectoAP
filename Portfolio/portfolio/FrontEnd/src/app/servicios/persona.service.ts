import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})


export class PersonaService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'https://ap-portfolio-nicocoronati.koyeb.app/personas/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getPersona(id: number): Observable<persona>{

    return this.http.get<persona>(this.URL+`traer/perfil/${id}`);

  }

  public update(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}?nombre=${persona.nombre}&apellido=${persona.apellido}&ocupacion=${persona.ocupacion}&sobre_mi=${persona.sobre_mi}&url_perfil=${persona.url_perfil}`, persona);
  }


}
