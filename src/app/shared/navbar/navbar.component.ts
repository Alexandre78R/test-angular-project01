import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Accueil</a>
      <a routerLink="/about" routerLinkActive="active">À propos</a>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #282c34;
    }
    a {
      color: white;
      text-decoration: none;
    }
    .active {
      font-weight: bold;
      text-decoration: underline;
    }
  `]
})
export class NavbarComponent {}
