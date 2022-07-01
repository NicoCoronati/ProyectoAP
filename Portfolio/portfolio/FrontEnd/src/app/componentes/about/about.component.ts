import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  textacercade:string = 'Soy estudiante de Ingeniería en Sistemas en la UTN FRC, tengo 21 años, me gusta programar desde los 11 años, momento que quise tener mi propio Argentum Online, practique atletismo a un nivel competitivo y me gusta mucho la música.       ?¿??¿';
  
  persona: persona = new persona("", "", "", "", "", 1, "", "", "");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //subscribe conecta al observable, escucha cambios y cuando se hacen los pasa al service
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

  //TERMINAR DESPUES
  cambiar_parrafo(): void {
    console.log("TEST")
    document.getElementById("editacercade")!.style.display="block";
    let texto = document.getElementById("textacercade")!.innerText;
  }

  myFunction2(valor:string){
    console.log("TEST2")
    
    console.log(valor + "asd");
    document.getElementById("textacercade")!.innerText = valor;

  }
}
