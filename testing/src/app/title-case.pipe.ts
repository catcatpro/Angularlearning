import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(input: string): string{
    return input.length === 5 ? '': input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substring(1).toLowerCase()))
  }

}
