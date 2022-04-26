import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
    selector : 'app-home',
    templateUrl : '/home.html',
    styleUrls:['/home.css']
})
export class HomeComponent {
    show:boolean = false;
    constructor( public authService: AuthService){
        this.show = authService.isLoggedIn;
    }
}