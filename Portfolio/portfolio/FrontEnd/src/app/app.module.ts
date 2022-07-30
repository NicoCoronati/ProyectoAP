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
import { FormsModule }   from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
