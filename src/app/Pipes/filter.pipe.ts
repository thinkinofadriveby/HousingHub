import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray = [];
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }
    
    for (const item of value) {
      // Check if the property contains the filter string, not just an exact match.
      if (item[propName].toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }


}
