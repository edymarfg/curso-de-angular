import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ConsultaCepService } from './services/consulta-cep.service';

@NgModule({ declarations: [FormDebugComponent, CampoControlErroComponent],
    exports: [FormDebugComponent, CampoControlErroComponent], imports: [CommonModule], providers: [DropdownService, ConsultaCepService, provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
