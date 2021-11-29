import { Injectable } from "@angular/core";
import { HttpHeaders,  HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { DataService } from "../../shared/services/data.service"
import { spotTradeEnvironment } from "../environments/environments" 
import { Cryptocurrency } from "../models/cryptocurrency.model";

@Injectable()
export class CryptocurrencyData {
    private urlToApi = "http://localhost:3001";

    constructor(private http: HttpClient) { }

    //public GetByName(data: String) : Observable<Cryptocurrency>{
    //    return this.http.get(`${this.urlToApi} + /cryptocurrency/cryptocurrencyByName?name=${data}`);
    //}

    public GetAll() : Observable<Cryptocurrency[]>{
        return this.http.get<Cryptocurrency[]>(this.urlToApi + "/cryptocurrency/cryptocurrencyGetAll");
    }
}