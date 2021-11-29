import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service"
import { spotTradeEnvironment } from "../environments/environments" 

@Injectable()
export class SpotTradeData {
    constructor(private dataService: DataService) { }

    public Create(data: any, optionHeaders?: HttpHeaders) : Observable<any>{
        return this.dataService.Post(spotTradeEnvironment.create, data, optionHeaders);
    }

    public GetAll(optionHeaders?: HttpHeaders) : Observable<any>{
        return this.dataService.Get(spotTradeEnvironment.getAll, optionHeaders);
    }
}