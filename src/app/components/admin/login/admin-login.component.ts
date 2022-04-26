import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Admin } from "src/app/admin.model";
import { LMSService } from "src/app/services/lms.services";



@Component({
    selector : 'app-admin',
    templateUrl : '/admin.html',
    styles : [`
        .container {
            width: 200px;
        }
    `]
})
export class AdminComponent {
    constructor(private router:Router, private lms:LMSService) {}
    userid:string ='6258fc20401c811b9c72e3c9';
    adminData:any;
    ngOnit(){
        this.lms.getAdmin(this.userid).subscribe((res:any)=>{
            this.adminData = res;
        })
        console.log(this.adminData);
    }
    authAdmin(userEmail:any , userPassword:any){
        /* if(userEmail == this.adminData.mail && userPassword == this.adminData.password ){  
            this.router.navigate(['/adminstatus']);     
        }else{
            alert("Invaid Credentials");
        } */
        if(userEmail === 'admin@admin.com' && userPassword === 'admin@admin' ){  
            this.router.navigate(['/adminstatus']);     
        }else{
            alert("Invaid Credentials");
        }
        
   }
 

}
