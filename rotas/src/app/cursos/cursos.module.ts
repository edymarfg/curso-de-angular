import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosComponent } from './cursos.component';
import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './service/cursos.service';

@NgModule({
  imports: [CommonModule, CursosRoutingModule],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  providers: [CursosService],
})
export class CursosModule {}
