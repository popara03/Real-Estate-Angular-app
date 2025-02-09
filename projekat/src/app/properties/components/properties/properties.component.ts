import { Component } from '@angular/core';
import { GetPropertiesService } from '../../services/getProperties/get-properties.service';
import { FilterPropertiesService } from '../../services/filterProperties/filter-properties.service';
import { Filter } from '../../../interface/filter/filter-dto';
import { GetDdlFilterDataService } from '../../services/getDdlFilterData/get-ddl-filter-data.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
  
  constructor(
    private getProperties : GetPropertiesService,
    private getDdlFilterData : GetDdlFilterDataService,
    private filterProperties : FilterPropertiesService
  ) {}
  
  //nekretnine
  properties : any = [];
  //nizovi za jedinstvena svojstva koja idu u filtere
  states : any = [];
  cities : any = [];
  floors : any = [];

  //vrednosti filtera
  filterObject : Filter = {
    state : null,
    city : null,
    minPrice : null,
    maxPrice : null,
    minArea : null,
    maxArea : null,
    floors : null,
    garage : false,
    pool : false,
    sort : null
  };

  //funkcija koja vraca niz jedinstvenih svojstava
  getUniqueFeatures(featureName:string): string[] {
    let array:string[] = [];

    this.properties.forEach((x:any) => {
      if(!array.includes(x[featureName])) {
        array.push(x[featureName]);
      }
    });

    return array;
  }
  
  ngOnInit() {
    this.getProperties.data.subscribe((data: any) => {
      this.properties = data;

      this.floors = this.getUniqueFeatures('floors').sort();
    });

    this.getDdlFilterData.get('state').subscribe((data: any) => {
      this.states = data;
    });

    this.getDdlFilterData.get('city').subscribe((data: any) => {
      this.cities = data;
    });
  }

  //funkcija za poziv servisa za filtriranje
  filter() {
    this.filterProperties.filter(this.filterObject).then((data: any) => {
      this.properties = data;
    });
  }
}