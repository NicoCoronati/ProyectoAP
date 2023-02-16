import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpeService } from 'src/app/expe.service';
import { expe } from 'src/app/model/exp.model';

@Component({
  selector: 'app-newexpeciencia',
  templateUrl: './newexpeciencia.component.html',
  styleUrls: ['./newexpeciencia.component.css']
})
export class NewexpecienciaComponent implements OnInit {

  nombre_expe: string = '';
  actividad: string = '';
  fecha: string = '';

  constructor(private expeService: ExpeService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const exp = new expe(this.nombre_expe, this.actividad, this.fecha);
    
    this.expeService.save(exp).subscribe(data => {
      alert("educación añadida");
      this.router.navigate(['']);
    }, err => {
      
      this.router.navigate(['']);
    }
    )
  }


}
