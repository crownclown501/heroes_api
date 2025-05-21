// heroes-app\src\app\shared\formato.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formato',
  standalone: false
})
export class FormatoPipe implements PipeTransform {
  transform(value: unknown, tipo: 'nombre' | 'stat' = 'stat'): string {
    if (tipo === 'stat' && typeof value === 'string' && !isNaN(Number(value))) {
      return `${value} pts`;
    }
    return `${value}`;
  }
}
