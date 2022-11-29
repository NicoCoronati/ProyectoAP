import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educ } from 'src/app/model/educ.model';
import { EducService } from 'src/app/servicios/educ.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombre_escuela: string = '';
  url_foto: string = '';
  titulo: string = '';
  fecha: string = '';

  constructor(private educService: EducService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const edu = new educ(this.nombre_escuela, this.url_foto, this.titulo, this.fecha);
    
    this.educService.save(edu).subscribe(data => {
      alert("educación añadida");
      this.router.navigate(['']);
    }, err => {
      
      this.router.navigate(['']);
    }
    )
  }


}
