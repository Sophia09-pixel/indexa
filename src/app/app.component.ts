import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./componentes/separador/separador.component";
import { ContatoComponent } from "./componentes/contato/contato.component";
import { FormsModule } from '@angular/forms';

interface Contato{
  id: number;
  nome: string;
  telefone: string;

}

import agenda from './agenda.json';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
     ContainerComponent,
     CabecalhoComponent,
     SeparadorComponent,
     ContatoComponent,
     FormsModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contato[] = agenda;
  filtroPorTexto: string = '';

  // Filtro por letra inicial
  filtrarPorLetraInicial(letra: string): Contato[] {
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().startsWith(letra);
    });
  }

  // Função corrigida para filtro por texto
  filtrarContatoPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;  // Retorna todos os contatos se o filtro estiver vazio
    }
    // Filtro pelos contatos que incluem o texto de busca
    return this.contatos.filter(contato => {
      return contato.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase());
    });
  }
}
