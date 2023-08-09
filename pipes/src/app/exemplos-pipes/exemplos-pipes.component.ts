import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
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

  constructor() {}

  ngOnInit(): void {}
}
