export class Trade {
   constructor(
    public date?: Date,
    public pair?: String,
    public position?: String,
    public entryPrice?: Number,
    public volume?: Number,
    public shoulder?: Number,
    public stop?: Number,
    public takeProfit?: Number,
    public exitPrice?: Number,
    public time?: Date,
    public comment?: String,
    public profitOrLoss?: Number,
    public percent?: Number
   ) {}
}