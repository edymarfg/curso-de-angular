import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-teste',
    templateUrl: './teste.component.html',
    styleUrls: ['./teste.component.scss'],
    standalone: false
})
export class TesteComponent implements OnInit {
  minhaVariavel: string = '';

  constructor() {}

  ngOnInit(): void {}
}
