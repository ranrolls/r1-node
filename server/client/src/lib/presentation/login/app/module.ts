import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComp } from './comp';
import { WrapperComp } from '../lib/presentation/wrapper/comp';
import { FormComp } from '../lib/presentation/form/comp';
import { SignUpComp } from '../lib/presentation/sign-up/comp';
import { SignInComp } from '../lib/presentation/sign-in/comp';
@NgModule({
    imports: [
        BrowserModule,
        CardModule,
        InputTextModule,
        ButtonModule,
        FontAwesomeModule,
    ],
    declarations: [
        AppComp,
        WrapperComp,
        FormComp,
        SignUpComp,
        SignInComp,
    ],
    bootstrap: [
        AppComp
    ],
    providers: [
    ]
})
export class AppModule {
    constructor() { }
}
