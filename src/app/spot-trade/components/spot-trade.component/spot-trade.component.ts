import { Component, OnInit } from '@angular/core';

import { SpotTrade } from '../../models/spot-trade.model'

import { SpotTradeData } from '../../data/spot-trade.data'
import { DataService } from "../../../shared/services/data.service"

@Component({
    selector: "spot-trade-table",
    templateUrl: "spot-trade.component.html",
    styleUrls: ["spot-trade.component.css"],
    providers: [SpotTradeData, DataService]
})

export class SpotTradeTableComponent implements OnInit {

    spotTrade: SpotTrade[];
    spotTradeNumber = 1;

    constructor(private data: SpotTradeData) { }

    ngOnInit(){
        this.data.GetAll().subscribe((data: any) => this.spotTrade = data);
    }

    public setSpotTradeNumber() : Number{
        return this.spotTradeNumber++;
    }

    public isPositiveZero(num) : boolean{
        if(num >= 0){
            return true;
        }
        return false;
    }
}