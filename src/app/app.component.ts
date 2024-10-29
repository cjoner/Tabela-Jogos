import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { TabelaJogosComponent } from './tabela-jogos/tabela-jogos.component'; // Ajuste o caminho se necessário

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Se o AppComponent também for standalone
  imports: [TabelaJogosComponent, RouterModule, NavigationComponent] // Importa os componentes necessários
})
export class AppComponent {
  title = 'Seu App';
}
