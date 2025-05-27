import { Component } from '@angular/core';
import { ElementComponent } from "../../components/element/element.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ElementComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
