import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ajuste o caminho se necessário
import { AppRoutingModule } from './app/app.routes'; // Certifique-se de que o caminho está correto
import { environment } from './environment'; // Ajuste o caminho conforme necessário
import { importProvidersFrom } from '@angular/core'; // Adicione esta linha se não estiver importado

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule) // Importa os provedores do AppRoutingModule
  ]
}).catch(err => console.error(err));
