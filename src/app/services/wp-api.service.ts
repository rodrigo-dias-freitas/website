import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WpApiService {

  private baseUrl = 'https://rodrigofreitas.dev.br/wordpress/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/posts?_embed&per_page=100`);
  }

  getPostsById(id:number){
    return this.http.get(`${this.baseUrl}/posts/${id}`);
  }

  getPages(){
    return this.http.get(`${this.baseUrl}pages`);
  }

  getCategoriasServico(){
    return this.http.get<any[]>(`${this.baseUrl}/categories?per_page=100`);
  }

  getTodosServicos(){
    return this.http.get<any[]>(`${this.baseUrl}/servico?per_page=100`);
  }

  getTiposDeServico() {
    return this.http.get<any[]>(`${this.baseUrl}/tipo_de_servico?per_page=100`);
  }

  getTiposDeElemento(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/tipo_elemento`);
  }

  getElementos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/elemento`);
  }

  getTodosElementos(){
    return this.http.get<any[]>(`${this.baseUrl}/elemento?per_page=100`);
  }

  getTodasFormacoes(){
    return this.http.get<any[]>(`${this.baseUrl}/education?per_page=100`);
  }

  getPostsBlog(): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/posts?categories=13&_embed`);
  }

  getSubcategoriasBlog(): Observable<any[]>{
     const blogCategoryId = 13;
     return this.http.get<any[]>(`${this.baseUrl}/categories?parent=${blogCategoryId}`);
  }

  getPostBySlug(slug: string): Observable<any>{
    return this.http.get<any[]>(`${this.baseUrl}/posts?slug=${slug}&_embed`);
  }

  getPostsDasSubcategoriasDoBlog(): Observable<any[]>{
    const categoriaPai = 13;

    return this.getSubcategoriasBlog().pipe(
      map(subcats => subcats.map(cat => cat.id)),
      switchMap((ids: number[]) => {
        const categoriasParam = ids.join(',');
        return this.http.get<any[]>(`${this.baseUrl}/posts?categories=${categoriasParam}&_embed&per_page=100`);
      })
    )
  }

  getCategoriaBySlug(slug:string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categories?slug=${slug}`);
  }

  getPostsByCategoriaId(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/posts?categories=${id}&_embed`);
  }


}
