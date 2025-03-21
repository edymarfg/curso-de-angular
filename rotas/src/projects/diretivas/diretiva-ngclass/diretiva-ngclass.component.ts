import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-diretiva-ngclass',
    templateUrl: './diretiva-ngclass.component.html',
    styleUrls: ['./diretiva-ngclass.component.scss'],
    standalone: false
})
export class DiretivaNgclassComponent implements OnInit {
  meuFavorito: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.meuFavorito = !this.meuFavorito;
  }
}
