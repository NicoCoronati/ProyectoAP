import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpeService } from 'src/app/expe.service';
import { expe } from 'src/app/model/exp.model';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  exper: expe = null;
  
  constructor(private expeService: ExpeService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expeService.getExperienciaId(id).subscribe(
      data => {
        this.exper = data;
      }, err => {
        alert("error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expeService.update(id, this.exper).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }


}

