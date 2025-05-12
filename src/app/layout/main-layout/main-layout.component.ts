import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <header>
      <h1>Mon Layout</h1>
      <nav>
        <a routerLink="/">Accueil</a>
        <a routerLink="/about">À propos</a>
      </nav>
    </header>

    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>Pied de page</p>
    </footer>
  `
})
export class MainLayoutComponent {}