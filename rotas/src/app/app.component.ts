import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from './login/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rotas';

  mostrarMenu: boolean = false;
  usuario: Usuario = new Usuario('usuario@email.com', '123456');

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe((isShowMenu) => {
      this.mostrarMenu = isShowMenu;
    });
    // this.authService.fazerLogin(this.usuario);
  }
}
