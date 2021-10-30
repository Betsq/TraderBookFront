import { Injectable } from "@angular/core";
import { GenericData } from "./generic-data";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TradeData {

    constructor(protected http: HttpClient) {
        
    }

    public GetAll(optionHeaders?: HttpHeaders) : Observable<any>{
         return this.http.get("http://localhost:3000/trade/getAll")
    }
}