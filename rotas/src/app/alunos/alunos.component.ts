import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alunos',
    templateUrl: './alunos.component.html',
    styleUrls: ['./alunos.component.scss'],
    standalone: false
})
export class AlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
  }
}
