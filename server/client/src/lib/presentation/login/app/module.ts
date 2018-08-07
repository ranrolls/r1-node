import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComp } from './comp';
import { LoginFormComp } from '../lib/presentation/login-form/comp';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        LoginFormComp,
        LoginComp
    ],
    bootstrap: [
        LoginComp
    ],
    providers: [
    ]
})
export class AppModule {
    constructor() { }
}
