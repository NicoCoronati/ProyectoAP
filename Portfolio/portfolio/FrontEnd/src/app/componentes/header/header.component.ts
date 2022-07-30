import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs'
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title:string = 'Portfolio';
  isLogged = false;
  subscription?:Subscription;
  
  constructor(private router:Router, private tokenService:TokenService
  ) {
    //this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  //LogOut si esta logeado deslogea, si no te lleva a logear
  onLogOut():void{
    if(this.isLogged) {
      this.tokenService.logOut();
      window.location.reload();
    } else {
      this.router.navigate(['/login'])
    }
    
  }

}
