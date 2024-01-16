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
    // });

    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
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

  verificaValidTouched(campo: string) {
    return (
      (this.form.get(campo)?.invalid && this.form.get(campo)?.touched) ?? false
    );
  }

  verificaEmailInvalido() {
    let campoEmail = this.form.get('email');
    if (campoEmail?.errors) {
      return this.verificaValidTouched('email') || campoEmail.errors?.['email'];
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'was-validated': this.verificaValidTouched(campo),
      'needs-validation': this.verificaValidTouched(campo),
    };
  }
}
