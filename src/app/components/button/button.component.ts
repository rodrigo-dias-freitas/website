import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() variant: 'primary' | 'accent' | 'highlight' | 'cancel' | 'delete' | 'custom' = 'custom';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() icon?: string;
  @Input() link?: string;
  @Output() action = new EventEmitter<void>();

  get buttonClass(): string[] {
    const classes = ['btn'];
    
    // Variantes do design system
    if (this.variant !== 'custom') {
      classes.push(`rdf__button-${this.variant}-${this.size}`);
    }

    // Se quiser tratar "cancel" e "delete" como tipos visuais específicos
    if (this.variant === 'cancel') {
      classes.push('btn-cancel'); // defina isso no seu SCSS
    } else if (this.variant === 'delete') {
      classes.push('btn-delete');
    }

    return classes;
  }

  onClick() {
    this.action.emit();
  }
}
