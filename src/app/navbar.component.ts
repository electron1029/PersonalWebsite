import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/resume">Resume</a>
      <a routerLink="/contact">Contact</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class NavBarComponent {
  title = 'Chantal Fry';
}
