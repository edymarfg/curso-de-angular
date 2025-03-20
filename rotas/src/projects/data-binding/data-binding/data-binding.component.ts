import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    //styleUrls: ['./data-binding.component.scss'],
    styles: [
        `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `,
    ],
    standalone: false
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem =
    'https://i.picsum.photos/id/491/200/300.jpg?hmac=1uGno3XFc0HqGY5bM9-mMu0M_wwx7oC0bC1hj_a9p04';
  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
