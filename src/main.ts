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

const routes = [
  { path: '', loadComponent: () => import ('./app/pages/home/home.component').then(m => HomeComponent)  }, // Rota inicial
  { path: 'sobre-mim', loadComponent: () => import ('./app/pages/about-me/about-me.component').then(m => AboutMeComponent), }, // Rota para "About"
  { path: 'services', loadComponent: () => import ('./app/pages/services/services.component').then(m => ServicesComponent), },
  { path: 'contato', loadComponent: () => import ('./app/pages/contact/contact.component').then(m => ContactComponent), }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));