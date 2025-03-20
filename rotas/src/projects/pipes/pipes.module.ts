import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FilterArrayPipe } from './filter-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    ExemplosPipesComponent,
    CamelCasePipe,
    FilterArrayPipe,
    FiltroArrayImpuroPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [
    SettingsService,
    // { provide: LOCALE_ID, useValue: 'pt-BR' },
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: SettingsService) =>
        settingsService.getLocale(),
    },
  ],
})
export class PipesModule {}
