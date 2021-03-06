import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { certif } from '../model/certif.model';


@Injectable({
  providedIn: 'root'
})


export class CertifService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'http://localhost:8080/certificaciones/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getListaCertificacion(): Observable<certif[]>{

    return this.http.get<certif[]>(this.URL+'traer');

  }

  public getCertificacionId(): Observable<certif>{

    return this.http.get<certif>(this.URL+'traer/perfil/1');

  }
}