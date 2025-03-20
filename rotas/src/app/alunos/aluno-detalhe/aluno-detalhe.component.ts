import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Aluno } from '../aluno';

@Component({
    selector: 'app-aluno-detalhe',
    templateUrl: './aluno-detalhe.component.html',
    styleUrls: ['./aluno-detalhe.component.scss'],
    standalone: false
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {}

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params) => {
    //   let id = params['id'];
    //   this.aluno = this.alunosService.getAluno(id);
    // });

    console.log('ngOnInit: ALUNODETALHECOMPONENT');

    this.inscricao = this.route.data.subscribe((info) => {
      console.log('RECEBENDO A INFORMAÇÃO', info);
      this.aluno = info['aluno'];
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
