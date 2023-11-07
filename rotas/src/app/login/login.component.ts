import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario('usuario@email.com', '123456');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  fazerLogin() {
    // console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }
}
