"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var navbar_component_1 = require("./navbar.component");
var home_component_1 = require("./home.component");
var bio_component_1 = require("./bio.component");
var resume_component_1 = require("./resume.component");
var contact_component_1 = require("./contact.component");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'about',
                    component: bio_component_1.BioComponent
                },
                {
                    path: 'resume',
                    component: resume_component_1.ResumeComponent
                },
                {
                    path: 'contact',
                    component: contact_component_1.ContactComponent
                }
            ])
        ],
        declarations: [
            navbar_component_1.NavBarComponent,
            home_component_1.HomeComponent,
            bio_component_1.BioComponent,
            resume_component_1.ResumeComponent,
            contact_component_1.ContactComponent
        ],
        bootstrap: [navbar_component_1.NavBarComponent]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map