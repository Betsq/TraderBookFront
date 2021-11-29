export class Quote {
    constructor(
       public price?: Number,
       public percent_change_24h?: Number,
       public percent_change_7d?: Number,
       public percent_change_all_time?: Date,
    ) {}
 }