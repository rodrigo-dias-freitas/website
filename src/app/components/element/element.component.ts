import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './element.component.html',
  styleUrl: './element.component.scss'
})
export class ElementComponent {

  @Input() name?: string;
  @Input() number?: string;
  @Input() description?: string;
  @Input() extraClass: string | string[] = '';

}
