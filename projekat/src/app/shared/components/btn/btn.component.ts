import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() type: string = 'button';
  @Input() text: string = '';
  @Input() link: string = '';
  @Input() textColorClass: string = 'text-white';
  @Input() bgColorClass: string = 'bg-green-700';
  @Input() bgHoverColorClass: string = 'bg-green-900';
  @Input() fullWidth: boolean = false;
}
