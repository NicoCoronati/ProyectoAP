import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nueva_educacion', component: NewEducacionComponent},
  { path: 'editexp', component: EditeducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
