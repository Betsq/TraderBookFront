import { Component, OnInit } from "@angular/core";
import { TradeData } from "../../data/trade-data"
import { Trade } from "../../models/trade.model"

@Component({
    selector: "home-page",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"],
    providers: [TradeData]
})

export class HomeComponent implements OnInit {
    constructor(private data: TradeData) { }

    trades : any;

    ngOnInit(){
       this.data.GetAll().subscribe((s : any) => this.trades = s);
       console.log("page was load");
    }

    public press(){
        console.log("button was press");
        console.log(this.trades);
    }
}