import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edithabilidad',
  templateUrl: './edithabilidad.component.html',
  styleUrls: ['./edithabilidad.component.css']
})
export class EdithabilidadComponent implements OnInit {

  habi: habilidad = null;
  
  constructor(private habilidadService: HabilidadService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.getHabilidadId(id).subscribe(
      data => {
        this.habi = data;
      }, err => {
        alert("error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.update(id, this.habi).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
