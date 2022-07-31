import { Component, OnInit } from '@angular/core';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: habilidad[] = [];

  constructor(public habilidadService: HabilidadService) { }

  ngOnInit(): void {
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.habilidadService.getListaHabilidad().subscribe(data => {this.habilidades = data})
  }

}
