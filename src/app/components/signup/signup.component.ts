import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
    selector : 'app-sign-in',
    templateUrl: '/signup.html',
    styles : [`
    .container {
        width: 200px;
    }
`]
})
export class SignUpComponent {
    constructor(public authService : AuthService){}
}