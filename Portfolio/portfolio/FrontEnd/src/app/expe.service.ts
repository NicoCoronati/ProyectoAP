import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { expe } from './model/exp.model';


@Injectable({
  providedIn: 'root'
})


export class ExpeService {

  //Dejar en 8080 no importa q uses 4200 es del tomcat creo
  URL = 'https://ap-portfolio-nicocoronati.koyeb.app/experiencias/';
  
  
  constructor(private http: HttpClient) { }

  //observable maneja peticiones y respuestas
  public getListaExperiencia(): Observable<expe[]>{

    return this.http.get<expe[]>(this.URL+'traer');

  }

  public getExperienciaId(id: number): Observable<expe>{

    return this.http.get<expe>(this.URL+`traer/perfil/${id}`);
    //return this.http.get<expe>(this.URL+`traer/perfil/1`);

  }


  public save(expe: expe): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', expe);
  }


  public update(id: number, expe: expe): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}?nombre_expe=${expe.nombre_expe}&actividad=${expe.actividad}&fecha=${expe.fecha}`, expe);
  }


  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + 'borrar/' + id);
  }

}
