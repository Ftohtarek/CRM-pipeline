import { IDeal } from "./deal.interface";

export class DealModel {
    constructor(public item: IDeal) { }

    get isExpire() {
        let currentDate:any = new Date().toISOString().slice(0, 10)
        // fake date because api is old 
        currentDate = new Date('2023-03-15'); 
        
        return new Date(currentDate).valueOf() > new Date(this.item.date).valueOf() ?
            true : false
    }

} 