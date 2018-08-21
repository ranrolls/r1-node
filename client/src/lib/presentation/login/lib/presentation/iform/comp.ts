import { Component, OnInit, Input } from '@angular/core';
import { faUser, faKey, faDiceOne, faDiceTwo, faAt, faMobile } from '@fortawesome/free-solid-svg-icons';
// import { faUser, faKey, faDiceOne, faDiceTwo, faAt, faMobile } from '@fortawesome/free-regular-svg-icons';
@Component({
    selector: 'iform',
    templateUrl: 'view.html',
    styleUrls: ['styles.scss']
})
export class IFormComp implements OnInit {
    faUser = faUser;
    faKey = faKey;
    faDiceOne = faDiceOne;
    faDiceTwo = faDiceTwo;
    faAt = faAt;
    faMobile = faMobile;
    constructor(
    ) {
    }
    ngOnInit() {
    }
}
