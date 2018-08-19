import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'sign-up',
    templateUrl: 'view.html',
    styleUrls: ['styles.scss']
})
export class SignUpComp implements OnInit {
    constructor(
    ) {
    }
    ngOnInit() {
    }
    faPlus = faPlus;
}