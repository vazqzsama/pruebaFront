import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonaComponent } from './persona/persona.component';
import { PersonaService } from './persona/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ PersonaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
