import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-diretiva-ngfor',
    templateUrl: './diretiva-ngfor.component.html',
    styleUrls: ['./diretiva-ngfor.component.scss'],
    standalone: false
})
export class DiretivaNgforComponent implements OnInit {
  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }
}
