import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyect } from '../model/proyect.model';


@Injectable({
  providedIn: 'root'
})


export class ProyectService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'https://ap-portfolio-nicocoronati.koyeb.app/proyectos/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getListaProyectos(): Observable<proyect[]>{

    return this.http.get<proyect[]>(this.URL+'traer');

  }

  public getProyectoId(): Observable<proyect>{

    return this.http.get<proyect>(this.URL+'traer/perfil/1');

  }
}