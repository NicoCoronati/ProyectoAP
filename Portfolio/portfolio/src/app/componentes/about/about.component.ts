import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  textacercade:string = 'Soy estudiante de Ingeniería en Sistemas en la UTN FRC, tengo 21 años, me gusta programar desde los 11 años, momento que quise tener mi propio Argentum Online, practique atletismo a un nivel competitivo y me gusta mucho la música.       ?¿??¿';
  
  

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

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
