import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './service/cursos.service';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styleUrls: ['./cursos.component.scss'],
    standalone: false
})
export class CursosComponent implements OnInit {
  cursos!: any[];
  pagina!: number;
  inscricao!: Subscription;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe((queryParams) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    //this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: { pagina: ++this.pagina },
    });
  }
}
