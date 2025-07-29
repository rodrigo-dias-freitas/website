import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)

  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    if(this.contactForm.valid){
      const formData = this.contactForm.value;

      this.http.post('https://rodrigofreitas.dev.br/wordpress/wp-json/custom/v1/mensagem', formData).subscribe({
        next: res =>{
          this.contactForm.reset();
        },
        error: err => {
          
        }
      });
    }
  }

}
