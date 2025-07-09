import { Component } from '@angular/core';
import { ElementComponent } from "../../components/element/element.component";
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ElementComponent, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
