import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  textacercade:string = 'Soy estudiante de Ingeniería en Sistemas en la UTN FRC, tengo 21 años, me gusta programar desde los 11 años, momento que quise tener mi propio Argentum Online, practique atletismo a un nivel competitivo y me gusta mucho la música.       ?¿??¿';
  
  //persona: persona = new persona("", "", "", "", "", 1, "", "", "");
  pers: persona = new persona("", "", "", "", "", 1, "", "", "");

  idActual: number;

  closeResult = '';

  constructor(public personaService: PersonaService, private tokenService: TokenService, private modalService: NgbModal, private activatedRouter: ActivatedRoute, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {

    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.personaService.getPersona(1).subscribe(data => {this.pers = data})

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
    this.personaService.update(this.idActual, this.pers).subscribe(data =>{}, err => {
      alert("")
    }
    )
  }



}
