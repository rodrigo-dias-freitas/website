import { Component, OnInit } from '@angular/core';
import { ElementComponent } from '../../components/element/element.component';
import { CommonModule } from '@angular/common';
import { WpApiService } from '../../services/wp-api.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ElementComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit{

 sections: any[] = [];

 constructor(private wpService: WpApiService) {}

 ngOnInit(): void {
   this.wpService.getTodosServicos().subscribe((servicos) => {
    this.sections = servicos.map(servico => ({
      title: servico.acf?.nome_do_servico || servico.title?.rendered,
      content: servico.acf?.descricao_do_servico || '',
      open: false
    }));
   });
 }

toggleSection(index: number): void{
  this.sections[index].open = !this.sections[index].open;
}
  
}
