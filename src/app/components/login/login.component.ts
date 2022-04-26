import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";



@Component({
    selector : 'app-sign-in',
    templateUrl : '/login.html',
    styles : [`
        .container {
            width: 200px;
        }
    `]
})
export class LogInComponent {
    constructor(public authService : AuthService) {}


}
