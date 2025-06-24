import { Component } from '@angular/core';
import { ElementComponent } from '../../components/element/element.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ElementComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  sections = [
    {
      title: 'Consultoria financeira familiar e pessoal',
      content: 'Nossa consultoria em planejamento financeiro pessoal e familiar oferece um diagnóstico financeiro personalizado, planejamento de investimentos, controle de despesas, educação financeira e suporte contínuo, tudo com o objetivo de alcançar a tranquilidade financeira e um futuro próspero. Com formação sólida em Gestão Financeira, um MBA em Planejamento Financeiro e vasta experiência no mercado, proporcionamos soluções personalizadas que realmente fazem a diferença. Transforma seu futuro financeiro hoje.',
      open: false,
    },
    {
      title: 'Planejamento de aposentadoria',
      content: 'Nossa consultoria em planejamento financeiro pessoal e familiar oferece um diagnóstico financeiro personalizado, planejamento de investimentos, controle de despesas, educação financeira e suporte contínuo, tudo com o objetivo de alcançar a tranquilidade financeira e um futuro próspero. Com formação sólida em Gestão Financeira, um MBA em Planejamento Financeiro e vasta experiência no mercado, proporcionamos soluções personalizadas que realmente fazem a diferença. Transforma seu futuro financeiro hoje.',
      open: false,
    },
    {
      title: 'Planejamento de Investimentos',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Gestão de Dívidas',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Design de Interfaces de Usuário (UI)',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Design Responsivo',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Prototipagem e Wireframing',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Design de Marca e Identidade Visual',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Desenvolvimento de Websites',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Desenvolvimento de Aplicações Web',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Desenvolvimento de Temas para WordPress',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
    {
      title: 'Otimização de Performance de Websites',
      content: 'Conteúdo da seção 3.',
      open: false,
    },
  ];

  toggleSection(index: number): void {
    this.sections[index].open = !this.sections[index].open;
  }
}
