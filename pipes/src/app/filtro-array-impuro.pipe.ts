import { Pipe } from '@angular/core';

import { FilterArrayPipe } from './filter-array.pipe';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false,
})
export class FiltroArrayImpuroPipe extends FilterArrayPipe {}
