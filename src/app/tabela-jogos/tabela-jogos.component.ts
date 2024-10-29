import { Component } from '@angular/core';

interface Jogo {
  data: string;
  adversario: string;
  local: string;
  resultado: string;
}

@Component({
  selector: 'app-tabela-jogos',
  templateUrl: './tabela-jogos.component.html',
  styleUrls: ['./tabela-jogos.component.css'],
  standalone: true, // Adicione esta linha
})
export class TabelaJogosComponent {
  jogos: Jogo[] = [
    { data: '2024-10-30', adversario: 'Argentina', local: 'São Paulo', resultado: '3-0' },
    { data: '2024-11-05', adversario: 'Colômbia', local: 'Rio de Janeiro', resultado: '2-1' },
    // Adicione mais jogos conforme necessário
  ];
}
