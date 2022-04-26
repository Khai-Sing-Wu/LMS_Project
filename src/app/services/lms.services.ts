import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Consumer } from "./../consumer.model";


@Injectable()
export class LMSService{
    constructor(private http:HttpClient) {}
    
    getClothes(){
        return this.http.get("http://localhost:5050/data");
    }

    postClothes(consumer:Consumer){
        return this.http.post("http://localhost:5050/add",consumer);
    }

    getOrder(userid:any)
    {
        return this.http.get("http://localhost:5050/order/"+userid);
    }
    getAdmin(userid:any)
    {
        return this.http.get("http://localhost:5050/admin/"+userid);
    }

    postOrder(userid:any,consumer:Consumer){
        return this.http.post("http://localhost:5050/order/"+userid, consumer)
    }
}