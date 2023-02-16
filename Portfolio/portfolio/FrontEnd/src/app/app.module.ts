import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonComponent } from './componentes/button/button.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { CertificacionesComponent } from './componentes/certificaciones/certificaciones.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';

import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Editeducacion2Component } from './componentes/educacion/editeducacion2.component';
import { EditPersonaComponent } from './edit-persona/edit-persona.component';
import { NuevahabilidadComponent } from './componentes/habilidades/nuevahabilidad/nuevahabilidad.component';
import { EdithabilidadComponent } from './componentes/habilidades/edithabilidad/edithabilidad.component';
import { NewexpecienciaComponent } from './componentes/experiencia/newexpeciencia/newexpeciencia.component';
import { EditexperienciaComponent } from './componentes/experiencia/editexperiencia/editexperiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    CertificacionesComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    NewEducacionComponent,
    Editeducacion2Component,
    EditPersonaComponent,
    NuevahabilidadComponent,
    EdithabilidadComponent,
    NewexpecienciaComponent,
    EditexperienciaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
