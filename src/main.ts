import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { AboutMeComponent } from './app/pages/about-me/about-me.component';
import { provideRouter } from '@angular/router';

const routes = [
  { path: '', component: HomeComponent }, // Rota inicial
  { path: 'sobre-mim', component: AboutMeComponent } // Rota para "About"
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));