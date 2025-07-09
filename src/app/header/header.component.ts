import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menuOpen = false;

  navItems = [
    { number: '01', symbol: 'Sm', label: 'Sobre mim', link: '/sobre-mim' },
    { number: '02', symbol: 'S', label: 'Serviços', link: '/services' },
    { number: '03', symbol: 'Pf', label: 'Portfolio', link: '#' },
    { number: '04', symbol: 'B', label: 'Blog', link: '#' },
    { number: '05', symbol: 'Ct', label: 'Contato', link: '/contato' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


}
