import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { ServicesComponent } from './app/pages/services/services.component';
import { AboutMeComponent } from './app/pages/about-me/about-me.component';
import { ContactComponent } from './app/pages/contact/contact.component';
import { provideHttpClient } from '@angular/common/http';
import { BlogListComponent } from './app/pages/blog-list/blog-list.component';
import { DetalhePostComponent } from './app/pages/blog-list/detalhe-post/detalhe-post.component';
import { PostPorCategoriaComponent } from './app/pages/blog-list/post-por-categoria/post-por-categoria.component';

const routes = [
  { path: '', loadComponent: () => import ('./app/pages/home/home.component').then(m => HomeComponent)  }, // Rota inicial
  { path: 'sobre-mim', loadComponent: () => import ('./app/pages/about-me/about-me.component').then(m => AboutMeComponent), }, // Rota para "About"
  { path: 'services', loadComponent: () => import ('./app/pages/services/services.component').then(m => ServicesComponent), },
  { path: 'contato', loadComponent: () => import ('./app/pages/contact/contact.component').then(m => ContactComponent), },
  { path: 'blog', loadComponent: () => import ('./app/pages/blog-list/blog-list.component').then(m => BlogListComponent) },
  { path: 'blog/:slug', loadComponent: () => import ('./app/pages/blog-list/detalhe-post/detalhe-post.component').then(m => DetalhePostComponent) },
  { path: 'blog/categoria/:slug', loadComponent: () => import ('./app/pages/blog-list/post-por-categoria/post-por-categoria.component').then(m => PostPorCategoriaComponent), }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));