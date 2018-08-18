import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComp } from './comp';
import { IndexComp } from '../lib/presentation/wrapper/comp';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        AppComp,
        IndexComp
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
