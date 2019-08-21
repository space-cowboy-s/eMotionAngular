import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class ListcarsPipe implements PipeTransform {

  transform(cars: any, searchBrand: string): any {
    if (!cars || !searchBrand) {
      return cars;
    }
    return cars.filter(car => car.brand.toLowerCase().indexOf(searchBrand.toLowerCase()) !== -1);
  }
}
