import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormulariosComponent,
    TemplateFormComponent,
    DataFormComponent,
  ],
  imports: [CommonModule, FormsModule, FormulariosRoutingModule],
})
export class FormulariosModule {}
