import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivatedGuard
  implements CanDeactivate<IFormCanDeactivate>
{
  constructor() {}

  canDeactivate(
    component: IFormCanDeactivate,
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('GUARDA DE DESATIVAÇÃO');

    return component.podeDesativar();
  }
}
