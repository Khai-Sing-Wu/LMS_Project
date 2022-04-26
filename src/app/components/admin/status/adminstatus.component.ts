import { Component } from "@angular/core";
import { LMSService } from "src/app/services/lms.services";

@Component({
    selector : '<app-admin-status>',
    templateUrl : './adminstatus.html',
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
export class AdminStatusComponent {
    newStatus:Array<any> =[];
    consumerdata:any;

    constructor(private lms:LMSService){
    }

    ngOnInit(){
        this.lms.getClothes().subscribe((res:any)=>this.consumerdata = res);
    }
    reload(){
      this.lms.getClothes().subscribe((res:any)=>this.consumerdata = res);
    }
    updateStatus(consumer:any ,uid:any, index:number){
      consumer.status = this.newStatus[index];
      this.lms.postOrder(uid,consumer).subscribe(res=>{
        console.log(res);
        this.reload();
      })

    }

}