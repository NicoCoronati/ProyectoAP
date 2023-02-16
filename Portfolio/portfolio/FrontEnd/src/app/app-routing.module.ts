import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { Editeducacion2Component } from './componentes/educacion/editeducacion2.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditexperienciaComponent } from './componentes/experiencia/editexperiencia/editexperiencia.component';
import { NewexpecienciaComponent } from './componentes/experiencia/newexpeciencia/newexpeciencia.component';
import { EdithabilidadComponent } from './componentes/habilidades/edithabilidad/edithabilidad.component';
import { NuevahabilidadComponent } from './componentes/habilidades/nuevahabilidad/nuevahabilidad.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'nueva_educacion', component: NewEducacionComponent},
  { path: 'editedu/:id', component: Editeducacion2Component},
  { path: 'borrar', component: HomeComponent},
  { path: 'editpersona/:id', component: EditPersonaComponent},
  { path: 'nueva_habilidad', component: NuevahabilidadComponent},
  { path: 'edithab/:id', component: EdithabilidadComponent},
  { path: 'nueva_experiencia', component: NewexpecienciaComponent},
  { path: 'editexpe/:id', component: EditexperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
