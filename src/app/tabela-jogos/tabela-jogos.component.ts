import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-tabela-jogos',
  templateUrl: './tabela-jogos.component.html',
  styleUrls: ['./tabela-jogos.component.css'],
  standalone: true, // Se for um componente standalone
  imports: [CommonModule] // Adicione o CommonModule aqui
})
export class TabelaJogosComponent {
  jogos = [
    // Exemplo de dados de jogos
    { data: '2024-11-01', adversario: 'Adversário 1', local: 'Local 1' },
    { data: '2024-11-08', adversario: 'Adversário 2', local: 'Local 2' }
  ];
}
