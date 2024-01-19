import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null),
    //     numero: new FormControl(null),
    //     complemento: new FormControl(null),
    //     rua: new FormControl(null),
    //     bairro: new FormControl(null),
    //     cidade: new FormControl(null),
    //     estado: new FormControl(null),
    //   }),
    // });

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
    });

    // Validators.pattern(
    //   "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
    // ),
    // [
    //   Validators.required,
    //   Validators.minLength(3),
    //   Validators.maxLength(20),
    // ],
  }

  onSubmit() {
    console.log(this.form.value);

    this.httpClient
      .post('https://httpbin.org/post', JSON.stringify(this.form.value))
      .pipe(map((res) => res))
      .subscribe(
        (dados) => {
          console.log(dados);
          //reseta o form
          // this.form.reset();
          // this.resetar();
        },
        (error) => alert('erro')
      );
  }

  resetar() {
    this.form.reset();
  }

  logif(val: boolean, text: string): void {
    if (val) {
      console.log(text);
    }
  }

  verificaValidTouched(campo: string): boolean {
    this.logif(
      campo === 'nome',
      '' + (this.form.get(campo)?.invalid && this.form.get(campo)?.touched) ??
        false
    );
    return (
      (this.form.get(campo)?.invalid && this.form.get(campo)?.touched) ?? false
    );
  }

  verificaEmailInvalido(): boolean {
    let campoEmail = this.form.get('email');

    return (
      this.verificaValidTouched('email') ||
      (campoEmail?.errors?.['email'] ?? false)
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'was-validated': this.verificaValidTouched(campo),
      'needs-validation': this.verificaValidTouched(campo),
    };
  }

  consultaCEP() {
    let cep = this.form.get('endereco.cep')?.value;
    console.log(cep);
    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.resetaDadosForm();

        this.httpClient
          .get(`https://viacep.com.br/ws/${cep}/json`)
          // .pipe(map((dados: any) => dados.json()))
          .subscribe((dados) => this.populaDadosForm(dados));
      }
    }
  }

  populaDadosForm(dados: any) {
    this.form.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    this.form.get('nome')?.setValue('Teste');

    console.log(this.form);
  }

  resetaDadosForm() {
    this.form.patchValue({
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
