import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ButtonComponent } from './componentes/button/button.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
