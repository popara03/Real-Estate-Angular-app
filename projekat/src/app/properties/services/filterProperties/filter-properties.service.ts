import { Injectable } from '@angular/core';
import { GetPropertiesService } from '../getProperties/get-properties.service';
import { Filter } from '../../../interface/filter/filter-dto';

@Injectable({
  providedIn: 'root'
})
export class FilterPropertiesService {

  constructor(private getProperties:GetPropertiesService) { }

  filter(filterObject:Filter): Promise<any> {
    return new Promise((resolve) => {
      this.getProperties.data.subscribe((data: any) => {
        let allProperties = data;
        let filteredProperties:any = [];

        allProperties.forEach((property:any) => {
          let addProperty = true;

          if(filterObject['state'] && property['state_name'] !== filterObject['state']) {
            addProperty = false;
          }

          if(filterObject['city'] && property['city_name'] !== filterObject['city']) {
            addProperty = false;
          }

          if(filterObject['minPrice'] && Number(property['price']) < filterObject['minPrice']) {
            console.log(filterObject['minPrice'], property['price'])
            addProperty = false;
          }

          if(filterObject['maxPrice'] && Number(property['price']) > filterObject['maxPrice']) {
            addProperty = false;
          }

          if(filterObject['minArea'] && Number(property['total_area']) < filterObject['minArea']) {
            addProperty = false;
          }

          if(filterObject['maxArea'] && Number(property['total_area']) > filterObject['maxArea']) {
            addProperty = false;
          }

          if(filterObject['floors'] && Number(property['floors']) != filterObject['floors']) {
            addProperty = false;
          }

          if(filterObject['garage'] && !property['garages'].length) {
            addProperty = false;
          }

          if(filterObject['pool'] && !property['pools'].length) {
            addProperty = false;
          }

          if(addProperty) {
            filteredProperties.push(property);
          }
        });

        //sortiranje
        if(filterObject['sort']) {
          switch(filterObject['sort']) {
            case 'priceAsc':
              filteredProperties.sort((a:any, b:any) => a.price - b.price);
              break;
            case 'priceDesc':
              filteredProperties.sort((a:any, b:any) => b.price - a.price);
              break;
            case 'areaAsc':
              filteredProperties.sort((a:any, b:any) => a.total_area - b.total_area);
              break;
            case 'areaDesc':
              filteredProperties.sort((a:any, b:any) => b.total_area - a.total_area);
              break;
          }
        }
        
        console.log(filteredProperties);
        resolve(filteredProperties);
      });
    });
  };
}