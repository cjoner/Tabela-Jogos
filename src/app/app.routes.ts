import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ajuste os caminhos conforme necessário
import { SobreComponent } from './sobre/sobre.component'; // Ajuste os caminhos conforme necessário
import { ContatoComponent } from './contato/contato.component'; // Ajuste os caminhos conforme necessário
import { TabelaJogosComponent } from './tabela-jogos/tabela-jogos.component'; // Ajuste o caminho conforme necessário

// Exporta a variável routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tabela-jogos', component: TabelaJogosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
];

// NgModule que importa as rotas
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Use forRoot para rotas principais
  exports: [RouterModule]
})
export class AppRoutingModule { }
