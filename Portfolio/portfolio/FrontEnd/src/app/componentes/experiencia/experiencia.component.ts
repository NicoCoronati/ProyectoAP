import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ExpeService } from 'src/app/expe.service';
import { expe } from 'src/app/model/exp.model';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expe: expe[] = [];

  unaExpe: expe = null;
  idActual: number;

  closeResult = '';

  

  constructor(public expeService: ExpeService, private tokenService: TokenService, private modalService: NgbModal, private activatedRouter: ActivatedRoute, private router: Router) { }

  isLogged = false;

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.expeService.getListaExperiencia().subscribe(data => {this.expe = data})
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
    this.expeService.update(this.idActual, this.unaExpe).subscribe(data =>{}, err => {
      alert("")
    }
    )
  }


  cargarExperiencia(): void {
    this.expeService.getListaExperiencia().subscribe(data => { this.expe = data; })
  }

  deleteExpe(id: number){
    if(id != undefined){
      this.expeService.delete(id).subscribe(data => {this.router.navigate(['']);}, 
      )
    }
    this.router.navigate(['']);
  }
}



