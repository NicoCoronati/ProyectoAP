import { Component, OnInit } from '@angular/core';
import { proyect } from 'src/app/model/proyect.model';
import { ProyectService } from 'src/app/servicios/proyect.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: proyect[] = [];

  constructor(public proyectService: ProyectService) { }

  ngOnInit(): void {
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.proyectService.getListaProyectos().subscribe(data => {this.proyectos = data})
  }

}

