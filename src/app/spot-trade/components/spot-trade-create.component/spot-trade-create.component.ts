import { Component, OnInit } from '@angular/core';
import { SpotTrade } from '../../models/spot-trade.model';
import { Observable } from 'rxjs';

import { SpotTradeData } from '../../data/spot-trade.data';
import { Cryptocurrency } from "../../models/cryptocurrency.model";
import { DataService } from "../../../shared/services/data.service";
import { CryptocurrencyData } from "../../data/cryptocurrency.data";

@Component({
    selector: "spot-trade-create",
    templateUrl: "spot-trade-create.component.html",
    styleUrls: ["spot-trade-create.component.html"],
    providers: [CryptocurrencyData]
})

export class SpotTradeCreateComponent implements OnInit {
    spotTradeModel: SpotTrade = new SpotTrade();

    cryptocurrency: Observable<Cryptocurrency[]>;

    selectedId = "";

    constructor(private cryptocurrencyData: CryptocurrencyData) { }

    ngOnInit(){
        this.cryptocurrency = this.cryptocurrencyData.GetAll();
    }
}