import { Component, OnInit } from '@angular/core';
import { ElementComponent } from "../../components/element/element.component";
import { WpApiService } from '../../services/wp-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ElementComponent, CommonModule, HttpClientModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit{

  posts: any[] = [];        
  postSobreMim: any = null;
  tipos: any[] = [];
  elementosPorTipo: { [tipoId: string]: any[]} = {};
  linhas: { [linha: number]: any[]} = {};
  formacoes: any[] = [];
  todosElementos: any[] = [];

  elementosPorColuna: {
    esquerda: { [linha: number]: any[] },
    direita: { [linha: number]: any[] }
  } = {
    esquerda: { 1: [], 2: [], 3: [] },
    direita: { 1: [], 2: [], 3: [] }
  };


  constructor(private wpService: WpApiService){}

  ngOnInit(): void {
    this.wpService.getPosts().subscribe((posts) =>{
      
      const postsSobre = posts.filter(post => post.categories?.includes(9));

      
      if(postsSobre.length > 0){
        this.postSobreMim = postsSobre[0];
      }

    });

    this.wpService.getTiposDeElemento().subscribe((tipos) => {
      this.tipos = tipos;

      this.wpService.getElementos().subscribe((elementos) => {
        this.organizarElementosPorTipo(elementos);
        
      });
    });

    this.wpService.getElementos().subscribe((elementos) =>{
      this.organizarTabela(elementos);
    });

    this.wpService.getTodosElementos().subscribe((elementos) => {

      this.todosElementos = elementos;

      elementos.forEach((el) => {
        const coluna = (el.acf?.coluna_do_elemento || 'esquerda') as 'esquerda' | 'direita';
        const linha = el.acf?.linha || 1;

        if(!this.elementosPorColuna[coluna][linha]) {
          this.elementosPorColuna[coluna][linha] = [];
        }

        this.elementosPorColuna[coluna][linha].push(el)
      });
    });

    this.wpService.getTodasFormacoes().subscribe((dados) => {
      this.formacoes = dados.sort((a, b) => b.acf?.ano - a.acf?.ano);
    });

    
   
  }

  organizarElementosPorTipo(elementos: any[]){
    this.elementosPorTipo = {};

    for(const tipo of this.tipos){
      const id = tipo.id;

      this.elementosPorTipo[id] = elementos.filter(el =>
        el.tipo_elemento?.includes(id)
      );
    }
  }

  organizarTabela(elementos: any[]){
    const gruposCol1 = new Map<string, any[]>();
    const gruposCol2 = new Map<string, any[]>();

    elementos.forEach(el => {
      const grupo = el.acf?.grupo_elemento;
      const coluna = el.acf?.coluna_do_elemento || 1;

      if(!grupo) return;

      if(coluna === 1){
        if(!gruposCol1.has(grupo)) gruposCol1.set(grupo, []);
        gruposCol1.get(grupo)?.push(el);
      } else {
        if(!gruposCol2.has(grupo)) gruposCol2.set(grupo, []);
        gruposCol2.get(grupo)?.push(el);
      }
    });

  }

  

}
