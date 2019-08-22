import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class ListcarsPipe implements PipeTransform {

  transform(cars: any, searchBrand: string, searchModel: string, searchColor: string, searchLocalisation: string, searchTypeVehicule: string): any {
    if (cars && cars.length) {
      return cars.filter( car => {
        if (searchBrand && car.brand.toLowerCase().indexOf((searchBrand.toLowerCase())) === -1 ) {
          return false;
        }
        if (searchModel && car.model.toLowerCase().indexOf((searchModel.toLowerCase())) === -1 ) {
          return false;
        }
        if (searchColor && car.color.toLowerCase().indexOf((searchColor.toLowerCase())) === -1 ) {
          return false;
        }
        if (searchLocalisation && car.location.toLowerCase().indexOf((searchLocalisation.toLowerCase())) === -1 ) {
          return false;
        }
        if (searchTypeVehicule && car.type.toLowerCase().indexOf((searchTypeVehicule.toLowerCase())) === -1 ) {
          return false;
        }
        return true;
      });
    }
    if (!cars) {
      return cars;
    }
  }
}
