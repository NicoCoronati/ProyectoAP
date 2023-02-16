import { Component, OnInit } from '@angular/core';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades: habilidad[] = [];
  
  unaHab: habilidad = null;
  idActual: number;

  closeResult = '';

  constructor(public habilidadService: HabilidadService, private tokenService: TokenService, private modalService: NgbModal, private activatedRouter: ActivatedRoute, private router: Router) { }
  isLogged = false;

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.habilidadService.getListaHabilidad().subscribe(data => {this.habilidades = data})
  }

  open(content: any, id: number) {
    this.idActual = id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.update(this.idActual, this.unaHab).subscribe(data =>{}, err => {
      alert("")
    }
    )
  }


  cargarExperiencia(): void {
    this.habilidadService.getListaHabilidad().subscribe(data => { this.habilidades = data; })
  }

  deleteHab(id: number){
    if(id != undefined){
      this.habilidadService.delete(id).subscribe(data => {this.router.navigate(['']);}, 
      )
    }
    this.router.navigate(['']);
  }

}
