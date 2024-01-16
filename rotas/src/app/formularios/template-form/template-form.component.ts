import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = { nome: null, email: null };

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form);
    // console.log(this.usuario);

    this.httpClient
      .post('https://httpbin.org/post', JSON.stringify(form.value))
      .pipe(map((res) => res))
      .subscribe((dados) => {
        console.log(dados);
        form.form.reset();
      });
  }
  // pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

  verificaValidTouched(campo: NgModel) {
    return (campo.invalid && campo.touched) ?? false;
  }

  aplicaCssErro(campo: NgModel) {
    return {
      'was-validated': this.verificaValidTouched(campo),
      'needs-validation': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep: any, form: NgForm) {
    console.log(cep);
    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.resetaDadosForm(form);

        this.httpClient
          .get(`https://viacep.com.br/ws/${cep}/json`)
          // .pipe(map((dados: any) => dados.json()))
          .subscribe((dados) => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados: any, form: NgForm) {
    // form.setValue({
    //   nome: form.value.nome,
    //   email: form.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     rua: dados.logradouro,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf,
    //   },
    // });

    form.form.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    console.log(form);
  }

  resetaDadosForm(form: NgForm) {
    form.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }
}
