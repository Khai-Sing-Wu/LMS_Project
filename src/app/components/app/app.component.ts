import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl : '/app.component.html',
  styles: [`
  header{
    background-color: blue;
    height: 50px;
    font-size: large;
    font-weight: bolder;
    color: white;
    text-align: center;
    line-height: 50px;
}`]
})
export class AppComponent {
  title = 'lms';
  constructor(public authService:AuthService){}
} 
