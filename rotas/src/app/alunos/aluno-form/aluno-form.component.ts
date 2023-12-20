import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from 'src/app/guards/iform-candeactivate';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent
  implements OnInit, OnDestroy, IFormCanDeactivate
{
  aluno: any;
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params) => {
      let id = params['id'];
      this.aluno = this.alunosService.getAluno(id);
      if (!this.aluno) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(): void {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      return confirm('Tem certeza que deseja sair dessa página');
    }
    return true;
  }

  podeDesativar(): boolean | Observable<boolean> | Promise<boolean> {
    return this.podeMudarRota();
  }
}
