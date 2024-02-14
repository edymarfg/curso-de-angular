import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {
  constructor(private httpClient: HttpClient) {}

  consultaCep(cep: string) {
    console.log(cep);
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  }
}
