import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WpApiService {

  private baseUrl = 'https://rodrigofreitas.dev.br/wordpress/wp-json/wp/v2';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/posts`);
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
}
