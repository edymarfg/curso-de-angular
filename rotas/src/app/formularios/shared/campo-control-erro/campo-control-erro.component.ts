import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-campo-control-erro',
    templateUrl: './campo-control-erro.component.html',
    styleUrls: ['./campo-control-erro.component.scss'],
    standalone: false
})
export class CampoControlErroComponent implements OnInit {
  @Input() mostrarErro!: boolean;
  @Input() msgErro!: string;

  constructor() {}

  ngOnInit(): void {}
}
