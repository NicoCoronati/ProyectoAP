import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-nuevahabilidad',
  templateUrl: './nuevahabilidad.component.html',
  styleUrls: ['./nuevahabilidad.component.css']
})
export class NuevahabilidadComponent implements OnInit {

  nombre: string = '';
  porcentaje: number = 0;

  constructor(private habService: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const hab = new habilidad(this.nombre, this.porcentaje);
    
    this.habService.save(hab).subscribe(data => {
      alert("habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      
      this.router.navigate(['']);
    }
    )
  }

}
