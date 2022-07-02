import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educ } from '../model/educ.model';


@Injectable({
  providedIn: 'root'
})


export class EducService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'http://localhost:8080/educaciones/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getListaEducacion(): Observable<educ[]>{

    return this.http.get<educ[]>(this.URL+'traer');

  }

  public getEducacionId(): Observable<educ>{

    return this.http.get<educ>(this.URL+'traer/perfil/1');

  }
}
