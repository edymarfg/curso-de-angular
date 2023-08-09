import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './camel-case.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import '@angular/common/locales/global/pt';
import { SettingsService } from './settings.service';
import { FilterArrayPipe } from './filter-array.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FilterArrayPipe,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
