import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../model/habilidad.model';


@Injectable({
  providedIn: 'root'
})


export class HabilidadService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'https://ap-portfolio-nicocoronati.koyeb.app/habilidades/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getListaHabilidad(): Observable<habilidad[]>{

    return this.http.get<habilidad[]>(this.URL+'traer');

  }

  public getHabilidadId(): Observable<habilidad>{

    return this.http.get<habilidad>(this.URL+'traer/perfil/1');

  }
}
