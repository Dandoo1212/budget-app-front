import { Pipe, PipeTransform } from '@angular/core';
import {CategoryEnum} from './category.enum';

@Pipe({
  name: 'categoryKey'
})
export class CategoryKeyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return CategoryEnum[value];
  }

}
