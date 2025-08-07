import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WpApiService } from '../../../services/wp-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-por-categoria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-por-categoria.component.html',
  styleUrl: './post-por-categoria.component.scss'
})
export class PostPorCategoriaComponent implements OnInit {
  posts: any[] = [];
  categoriaSlug: string | null = null;
  categoria: any;

  constructor(private route: ActivatedRoute, private wpService: WpApiService){}

  ngOnInit(): void {
    this.categoriaSlug = this.route.snapshot.paramMap.get('slug');

    if(this.categoriaSlug){
      this.wpService.getCategoriaBySlug(this.categoriaSlug).subscribe((res) => {
        if(res.length > 0){
          this.categoria = res[0];

          console.log('Slug recebido:', this.categoriaSlug);
          console.log('Categoria retornada:', res);

          this.wpService.getPostsByCategoriaId(this.categoria.id).subscribe((posts) => {
            this.posts = posts;
          });
        }
      });

      
    }
  }

}
