import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  standalone: true, // Se for um componente standalone
  imports: [RouterModule] // Importando RouterModule
})
export class NavigationComponent {}
