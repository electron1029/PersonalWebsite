"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavBarComponent = (function () {
    function NavBarComponent() {
        this.title = 'Chantal Fry';
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: 'nav-bar',
        template: "\n    <h1>{{title}}</h1>\n    <nav>\n      <a routerLink=\"/home\">Home</a>\n      <a routerLink=\"/about\">About</a>\n      <a routerLink=\"/resume\">Resume</a>\n      <a routerLink=\"/contact\">Contact</a>\n    </nav>\n    <router-outlet></router-outlet>\n    "
    })
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map