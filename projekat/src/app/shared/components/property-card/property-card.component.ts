import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() state: string = '';
  @Input() city: string = '';
  @Input() area: string = '';
  @Input() price: string = '';
  @Input() img: string = '';
  @Input() description: string = '';
}