import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-property-details-card',
  templateUrl: './property-details-card.component.html',
  styleUrl: './property-details-card.component.css'
})
export class PropertyDetailsCardComponent {
  @Input() title:string = '';
  @Input() area:any = 0;
  @Input() showX:boolean = false;
  @Input() contentList:any[] = [];
  
  @Output() xEvent = new EventEmitter();
  xEventEmitter() {
    this.xEvent.emit();
  }
}
