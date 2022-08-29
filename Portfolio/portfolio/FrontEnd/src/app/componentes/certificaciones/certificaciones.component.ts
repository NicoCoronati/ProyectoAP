import { Component, OnInit } from '@angular/core';
import { certif } from 'src/app/model/certif.model';
import { CertifService } from 'src/app/servicios/certif.service';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.css']
})
export class CertificacionesComponent implements OnInit {

  certifaciones: certif[] = [];

  constructor(public certifService: CertifService) { }

  ngOnInit(): void {
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.certifService.getListaCertificacion().subscribe(data => {this.certifaciones = data})
    
  }

}
