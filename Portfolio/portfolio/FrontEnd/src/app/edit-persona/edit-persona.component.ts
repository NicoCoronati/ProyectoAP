import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../model/persona.model';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit {

  per: persona = null;
  
  constructor(private persService: PersonaService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persService.getPersona(id).subscribe(
      data => {
        this.per = data;
      }, err => {
        alert("error");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persService.update(id, this.per).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }



}
