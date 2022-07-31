import { Component, OnInit } from '@angular/core';
import { educ } from 'src/app/model/educ.model';
import { EducService } from 'src/app/servicios/educ.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educ: educ[] = [];

  unaEduc: educ = null;
  idActual: number;

  closeResult = '';

  

  constructor(public educService: EducService, private tokenService: TokenService, private modalService: NgbModal, private activatedRouter: ActivatedRoute, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.educService.getListaEducacion().subscribe(data => {this.educ = data})
  }

  open(content: any, id: number) {
    this.idActual = id;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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
    //const id = this.activatedRouter.snapshot.params['id'];
    this.educService.update(this.idActual, this.unaEduc).subscribe(data =>{}, err => {
      alert("")
    }
    )
  }


  cargarExperiencia(): void {
    this.educService.getListaEducacion().subscribe(data => { this.educ = data; })
  }

  deleteEdu(id: number){
    if(id != undefined){
      this.educService.delete(id).subscribe(data => {this.router.navigate(['']);}, 
      )
    }
  }
}


