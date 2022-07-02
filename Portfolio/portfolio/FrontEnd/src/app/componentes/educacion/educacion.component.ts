import { Component, OnInit } from '@angular/core';
import { educ } from 'src/app/model/educ.model';
import { EducService } from 'src/app/servicios/educ.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educ: educ[] = [];

  constructor(public educService: EducService) { }

  ngOnInit(): void {
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.educService.getListaEducacion().subscribe(data => {this.educ = data})
  }

}
