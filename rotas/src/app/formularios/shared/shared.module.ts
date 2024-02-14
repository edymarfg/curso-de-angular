import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaCepService } from './services/consulta-cep.service';

@NgModule({
  declarations: [FormDebugComponent, CampoControlErroComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [FormDebugComponent, CampoControlErroComponent],
  providers: [DropdownService, ConsultaCepService],
})
export class SharedModule {}
