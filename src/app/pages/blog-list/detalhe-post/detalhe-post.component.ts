import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WpApiService } from '../../../services/wp-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhe-post.component.html',
  styleUrl: './detalhe-post.component.scss'
})
export class DetalhePostComponent implements OnInit {

  post: any;
  allPosts: any[] = [];
  previousPost: any;
  nextPost: any;

  constructor(private router: ActivatedRoute, private wpService: WpApiService){}

  ngOnInit(): void {
    const slug  = this.router.snapshot.paramMap.get('slug');

    this.wpService.getPosts().subscribe(posts => {
      this.allPosts = posts;

      if(slug){
        this.wpService.getPostBySlug(slug).subscribe((res) => {
          this.post = res[0];

          if(this.post) {
            this.wpService.getPostsDasSubcategoriasDoBlog().subscribe((postsBlog) => {
              const currentIndex = postsBlog.findIndex(p => p.id === this.post.id);

              this.previousPost = postsBlog[currentIndex - 1];
              this.nextPost = postsBlog[currentIndex + 1];
            })
          }

          
        });
      }
    });
  }
}
