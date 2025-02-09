import { Component } from '@angular/core';
import { GetSinglePropertyService } from '../../services/getSingleProperty/get-single-property.service';
import { ActivatedRoute } from '@angular/router';
import { InsertDTO } from '../../../interface/insertDTO/insert-dto';

@Component({
  selector: 'app-single-property',
  templateUrl: './single-property.component.html',
  styleUrl: './single-property.component.css'
})
export class SinglePropertyComponent {
  constructor(
    private getSingleProperty:GetSinglePropertyService,
    private route:ActivatedRoute
  ){}

  property:any = {};
  objectKeys = Object.keys;

  ngOnInit() {
    //id iz url-a
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.getSingleProperty.byId(id).subscribe((data) => {
      this.property = data;
      console.clear();
    });
  }
}