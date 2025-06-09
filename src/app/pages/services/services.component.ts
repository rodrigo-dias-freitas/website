import { Component } from '@angular/core';
import { ElementComponent } from '../../components/element/element.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ElementComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
