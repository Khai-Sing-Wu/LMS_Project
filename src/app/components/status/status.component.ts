import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { LMSService } from "src/app/services/lms.services";

@Component({
    selector : 'app-status',
    template : `
    <ul>
      <li> <a [routerLink]="['']">Home</a> </li>
      <li> <a [routerLink]="['/order']"> Order </a></li>
      <li> <a  [routerLink]="['/status']"> Status </a> </li>
      <li> <a  (click)='authService.SignOut()'> Log Out</a> </li>
    </ul>

    <div> 
        <h2>Users List</h2>
        <table class="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
              <th> Sl # </th>
              <th> User ID </th>
              <th> Total Clothes </th>
              <th> Status </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let consumer of consumerdata; index as idx;" >
            <td>{{ idx + 1 }}</td>
            <td>{{ consumer.uid }}</td>
            <td>{{ consumer.coat + consumer.jeans + consumer.jacket + consumer.shirt + consumer.shorts + consumer.suit +  consumer.tshirt + consumer.undergarment}}</td>
            <td>{{ consumer.status }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    `,
    styles : [`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #87CEEB;
        height : 50px;
      }
      
      li {
        float: left;
      }
     
      
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover {
        background-color: white;
        color : #87CEEB;
      }`]
})
export class StatusComponent {
    consumerdata:any;

    constructor(private lms:LMSService, public authService:AuthService){
        console.log(this.authService.userData.uid);
    }

    ngOnInit(){
        this.lms.getOrder(this.authService.userData.uid).subscribe((res:any)=>this.consumerdata = res);
    }

}