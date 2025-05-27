import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label: string = 'Enviar';
  @Input() type: 'cancel' | 'rdf__button-primary' | 'delete' | 'custom' = 'custom';
  @Input() icon?: string;
  @Input() link?: string;
  @Input() action = new EventEmitter<void>();

  onClick(){
    this.action.emit();
  }
  
  
}
