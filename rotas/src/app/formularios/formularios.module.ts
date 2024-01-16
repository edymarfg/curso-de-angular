import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form/data-form.component';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { SharedModule } from './shared/shared.module';
import { TemplateFormComponent } from './template-form/template-form.component';

@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    DataFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormulariosRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
})
export class FormulariosModule {}
