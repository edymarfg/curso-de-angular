import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';

@Injectable()
export class AlunoDetalheResolver  {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Aluno | null> | Promise<Aluno | null> | Aluno | null {
    console.log('AlunoDetalheResolver');

    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }
}
