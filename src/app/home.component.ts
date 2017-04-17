import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: `
    <h3>Bay area full-stack software engineer.</h3>
    <img [src]="profileImage">`
})

export class HomeComponent {
  profileImage = "../resources/home_img.jpg"
 }
