import { Component, OnInit } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
    selector: 'app-exemplos-pipes',
    templateUrl: './exemplos-pipes.component.html',
    styleUrls: ['./exemplos-pipes.component.scss'],
    standalone: false
})
export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'Moby Dick',
    rating: 4.54321,
    paginas: 736,
    preco: 127.03,
    dataLancamento: new Date(2022, 6, 11),
    url: 'https://acesse.one/iTAsG',
  };

  livros: string[] = [
    'O Senhor dos Anéis',
    '1984',
    'Vinte mil léguas submarinas',
  ];

  filtro!: string;

  addCurso(valor: string) {
    console.log('PASSOU', valor, this.livros);

    this.livros.push(valor);
  }

  obterCursos() {
    if (
      this.livros.length === 0 ||
      this.filtro === undefined ||
      this.filtro.trim() === ''
    ) {
      return this.livros;
    }

    return this.livros.filter((v: any) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000).pipe(map((valor) => 'Valor assíncrono 2'));

  constructor() {}

  ngOnInit(): void {}
}
