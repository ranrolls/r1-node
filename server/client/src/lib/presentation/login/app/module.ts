import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AppComp } from './comp';
import { WrapperComp } from '../lib/presentation/wrapper/comp';
import { FormComp } from '../lib/presentation/form/comp';
import { SignUpComp } from '../lib/presentation/sign-up/comp';
import { SignInComp } from '../lib/presentation/sign-in/comp';
@NgModule({
    imports: [
        ButtonModule,
        CardModule,
        BrowserModule,
    ],
    declarations: [
        SignInComp,
        SignUpComp,
        FormComp,
        WrapperComp,
        AppComp
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
