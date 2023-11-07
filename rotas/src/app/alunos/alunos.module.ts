import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosService } from './alunos.service';
import { NgModel, FormsModule } from '@angular/forms';
import { AlunosDeactivatedGuard } from '../guards/alunos-deactivate.guard';

@NgModule({
  imports: [CommonModule, AlunosRoutingModule, FormsModule],
  exports: [],
  declarations: [AlunosComponent, AlunoDetalheComponent, AlunoFormComponent],
  providers: [AlunosService, AlunosDeactivatedGuard],
})
export class AlunosModule {}
