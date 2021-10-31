import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service"

@Injectable()
export class TradeData {

    constructor(protected dataService: DataService) {
        
    }

    public GetAll(optionHeaders?: HttpHeaders) : Observable<any>{
       return;
    }
}