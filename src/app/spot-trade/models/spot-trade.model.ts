import { Coin } from "./coin.model"
import { Quote } from "./quote.model"

export class SpotTrade {
   constructor(
      public coin?: Coin,
      public quotes?: Quote,
   ) {}
}