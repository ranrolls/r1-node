import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.comp';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        LoginComponent
    ],
    bootstrap: [
        LoginComponent
    ],
    providers: [
    ]
})
export class AppModule {
    constructor() { }
}
