import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EstadoBr } from '../models/estado-br';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private httpCliente: HttpClient) {}

  getEstadosBr(): Observable<EstadoBr[]> {
    return this.httpCliente.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' },
    ];
  }
}
