import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educ } from '../model/educ.model';


@Injectable({
  providedIn: 'root'
})


export class EducService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'https://ap-portfolio-nicocoronati.koyeb.app/educaciones/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getListaEducacion(): Observable<educ[]>{

    return this.http.get<educ[]>(this.URL+'traer');

  }

  public getEducacionId(id: number): Observable<educ>{

    return this.http.get<educ>(this.URL+`traer/perfil/${id}`);

  }


  public save(educ: educ): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', educ);
  }

  public updateold(id: number, educ: educ): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, educ);
  }

  public update(id: number, educ: educ): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}?nombre_escuela=${educ.nombre_escuela}&url_foto=${educ.url_foto}&titulo=${educ.titulo}&fecha=${educ.fecha}`, educ);
  }


  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/' + id);
  }

}
