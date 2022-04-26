import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { LMSService } from "src/app/services/lms.services";
import { Consumer } from "src/app/consumer.model";

@Component({
    selector : 'app-cloth',
    templateUrl : '/order.html',
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
export class OrderComponent {
    
    total:number=0;
    
    orderData:Consumer = { 
        coat:0,
        jacket:0,
        jeans:0,
        shorts:0,
        shirt:0,
        suit:0,
        undergarment:0,
        tshirt:0,
        status : 'Ordered',
        total: 0,
        uid: ''
      };

    constructor(private lms: LMSService, public authService: AuthService, private ar:ActivatedRoute, private router:Router){}

    ngOnInit(){
        this.updateTotal();
    }
    updateTotal(){
        this.total = this.orderData.coat + this.orderData.jeans + this.orderData.jacket + this.orderData.shirt + this.orderData.shorts + this.orderData.suit +  this.orderData.tshirt + this.orderData.undergarment;
        this.orderData.total = this.total;
    }


    placeOrder(){
        console.log(this.orderData.total);
        this.orderData.uid = this.authService.userData.uid;
        console.log(this.orderData);
        this.lms.postClothes(this.orderData).subscribe((res:any) => {
        console.log(res);
        this.router.navigate(['status']);
      })
    }

}



