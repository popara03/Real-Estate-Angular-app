import { Injectable } from '@angular/core';
import { InsertDTO } from '../../../../../../../interface/insertDTO/insert-dto';
import { BehaviorSubject } from 'rxjs';
import { Bedroom } from '../../../../../../../interface/Bedroom/bedroom';
import { Kitchen } from '../../../../../../../interface/Kitchen/kitchen';
import { Garage } from '../../../../../../../interface/garage/garage';
import { Pool } from '../../../../../../../interface/pool/pool';
import { HttpClient } from '@angular/common/http';
import { Bathroom } from '../../../../../../../interface/bathroom/bathroom';

@Injectable({
  providedIn: 'root'
})
export class PropertyInsertObjectBuilderService {

  constructor(
    private http: HttpClient
  ) { }

  //observable za objekat insertDTO tipa na koji ce druge komponente moci da se subscribe-uju
  insertObject: InsertDTO = {
    title: '',
    image: '',
    description: '',
    cityId: 0,
    stateId: 0,
    address: '',
    price: 0,
    priceFixed: false,
    ownerPhone: '',
    ownerEmail: '',
    floors: 0,
    gardenArea: 0,
    bedrooms: [],
    bathrooms: [],
    kitchens: [],
    garages: [],
    pools: []
  };

  changedProperty:string = '';
  
  private insertObjectSource = new BehaviorSubject<InsertDTO>(this.insertObject);
  insertObject$ = this.insertObjectSource.asObservable();

  //metoda za postavljanje objekta
  set(insertObject: InsertDTO){
    this.insertObject = insertObject;
    this.insertObjectSource.next(this.insertObject);
    console.log(this.insertObject);
  }

  //reset metoda za objekat
  reset(){
    this.insertObject = {
      title: '',
      image: '',
      description: '',
      cityId: 0,
      stateId: 0,
      address: '',
      price: 0,
      priceFixed: false,
      ownerPhone: '',
      ownerEmail: '',
      floors: 0,
      gardenArea: 0,
      bedrooms: [],
      kitchens: [],
      bathrooms: [],
      garages: [],
      pools: []
    };

    this.insertObjectSource.next(this.insertObject);
  }

  //metode za azuriranje objekta
  updateBedrooms(obj : Bedroom){
    this.changedProperty = 'bedrooms';

    this.insertObject.bedrooms.push(obj);
    this.insertObjectSource.next(this.insertObject);
  }

  updateKitchens(obj : Kitchen){
    this.changedProperty = 'kitchens';
    this.insertObject.kitchens.push(obj);
    this.insertObjectSource.next(this.insertObject);
  }

  updateBathrooms(obj : Bathroom){
    this.changedProperty = 'bathrooms';
    this.insertObject.bathrooms.push(obj);
    this.insertObjectSource.next(this.insertObject);
  }

  updatePools(obj : Pool){
    this.insertObject.pools.push(obj);
    this.insertObjectSource.next(this.insertObject);
  }

  updateGarages(obj : Garage){
    this.insertObject.garages.push(obj);
    this.insertObjectSource.next(this.insertObject);
  }
}