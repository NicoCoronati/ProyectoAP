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

  public getHabilidadId(id: number): Observable<habilidad>{

    return this.http.get<habilidad>(this.URL+'traer/perfil/'+id);

  }

  public save(habilidad: habilidad): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', habilidad);
  }

  public update(id: number, habilidad: habilidad): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}?nombre=${habilidad.nombre}&porcentaje=${habilidad.porcentaje}`, habilidad);
  }


  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/' + id);
  }
}
