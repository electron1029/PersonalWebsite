import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './navbar.component'
import { HomeComponent } from './home.component';
import { BioComponent } from './bio.component';
import { ResumeComponent } from './resume.component';
import { ContactComponent } from './contact.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'about',
                component: BioComponent
            },
            {
                path: 'resume',
                component: ResumeComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ])
    ],
    declarations: [
        NavBarComponent,
        HomeComponent,
        BioComponent,
        ResumeComponent,
        ContactComponent
    ],
    bootstrap: [NavBarComponent]
})

export class MainModule { }
