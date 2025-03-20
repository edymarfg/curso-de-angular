import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard  {
  constructor() {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    // console.log(childRoute);
    // console.log(state);
    console.log('ALUNOS GUARD');

    if (state.url.includes('editar')) {
      // alert('Usuário sem acesso');
      // return false;
    }

    return true;
  }
}
