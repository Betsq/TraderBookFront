export class Coin {
    constructor(
       public name?: String,
       public purchasePrice?: Number,
       public entryPrice?: Number,
       public entryDate?: Date,
       public volume?: Number,
       public market?: String
    ) {}
 }