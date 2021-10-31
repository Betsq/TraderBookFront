export class Trade {
   constructor(
      public name: String,
      public purchasePrice: Number,
      public entryPrice: Number,
      public entryDate: Date,
      public volume: Number,
      public Market: String
   ) {}
}