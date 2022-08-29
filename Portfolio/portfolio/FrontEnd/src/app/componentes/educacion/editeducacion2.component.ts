import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educ } from 'src/app/model/educ.model';
import { EducService } from 'src/app/servicios/educ.service';

@Component({
  selector: 'app-editeducacion2',
  templateUrl: './editeducacion2.component.html',
  styleUrls: ['./editeducacion2.component.css']
})
export class Editeducacion2Component implements OnInit {

  educa: educ = null;
  
  constructor(private educService: EducService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educService.getEducacionId(id).subscribe(
      data => {
        this.educa = data;
      }, err => {
        alert("error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educService.update(id, this.educa).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("error2");
        this.router.navigate(['']);
      }
    )
  }


}
