import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { WpApiService } from '../../services/wp-api.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent,
    CommonModule,
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  posts: any[] = [];
  categorias: any[] = [];
  servicosPorCategoria: { [categoria: string]: any[]} = {};
  resumoSobreMim: any = null;
  postsBlog: any[] = [];

  

  constructor(private wpService: WpApiService){}

  ngOnInit(): void {
    this.wpService.getPosts().subscribe((data: any) => {
      this.posts = data;
      const postsResumo = this.posts.filter((post) => 
        post.categories?.includes(8)
      );

      if(postsResumo.length > 0) {
        this.resumoSobreMim = postsResumo[0];
      }
    });

    this.wpService.getTiposDeServico().subscribe((categorias) => {
      this.categorias = categorias;

      this.wpService.getTodosServicos().subscribe((servicos) => {

        this.organizarServicosPorCategoria(servicos);

      });
    });

    this.wpService.getPostsDasSubcategoriasDoBlog().subscribe((posts) => {
      this.postsBlog = posts.slice(0, 3);
    });
  }

  organizarServicosPorCategoria(servicos: any[]){
    this.servicosPorCategoria = {};

    for(const categoria of this.categorias) {
      const id = categoria.id;

      this.servicosPorCategoria[id] = servicos.filter((servico) => {
        return servico.tipo_de_servico?.includes(id)
      })
    }

    console.log('Serviços por categoria:', this.servicosPorCategoria);
  }

  onClickGoToAboutMe(){
    console.log('Link');
  }


}
