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

@Injectable()
export class AlunosDeactivatedGuard
  implements CanDeactivate<AlunoFormComponent>
{
  constructor() {}

  canDeactivate(
    component: AlunoFormComponent,
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log('GUARDA DE DESATIVAÇÃO');

    return component.podeMudarRota();
  }
}
