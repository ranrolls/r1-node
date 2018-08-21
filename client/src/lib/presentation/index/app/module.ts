import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComp } from './comp';
import { WrapperComp } from '../lib/presentation/wrapper/comp';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComp,
        WrapperComp
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
