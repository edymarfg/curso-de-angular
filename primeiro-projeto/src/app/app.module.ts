import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent, MeuPrimeiro2Component],
  imports: [BrowserModule, FormsModule, HttpClientModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
