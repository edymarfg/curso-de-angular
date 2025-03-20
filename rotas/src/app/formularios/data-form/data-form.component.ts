import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  Validators,
} from '@angular/forms';
import { Observable, map, of } from 'rxjs';
import { DropdownService } from '../shared/services/dropdown.service';
import { EstadoBr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  standalone: false,
})
export class DataFormComponent implements OnInit {
  form!: FormGroup;
  // estados: EstadoBr[] = [];
  estados: Observable<EstadoBr[]> = of([]);
  cargos: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private dropDownService: DropdownService,
    private cepService: ConsultaCepService
  ) {}

  ngOnInit(): void {
    this.estados = this.dropDownService.getEstadosBr();
    this.cargos = this.dropDownService.getCargos();
    // this.dropDownService.getEstadosBr().subscribe((dados) => {
    //   this.estados = dados;
    //   console.log(dados);
    // });
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

      cargo: [null],
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

    if (this.form.valid) {
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
    } else {
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.form);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
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
    return (
      (this.form.get(campo)?.invalid &&
        (this.form.get(campo)?.touched || this.form.get(campo)?.dirty)) ??
      false
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
    if (cep != null && cep !== '') {
      this.cepService.consultaCep(cep).subscribe((dados: any) => {
        this.resetaDadosForm();
        this.populaDadosForm(dados);
      });
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

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.form.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any) {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 === obj2;
  }
}
