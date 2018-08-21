import { Component, OnInit, Input } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'sign-in',
    templateUrl: 'view.html',
    styleUrls: ['styles.scss']
})
export class SignInComp implements OnInit {
    constructor(
    ) {
    }
    ngOnInit() {
    }
    faSignInAlt = faSignInAlt;
}
