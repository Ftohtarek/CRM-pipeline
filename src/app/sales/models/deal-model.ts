import { IDeal } from "./deal.interface";

export class DealModel {
    constructor(public item: IDeal) {
    }

    get statge() {
        return this.item.status
    }
    get id() {
        return this.item.id
    }
    get pro_status() {
        return Number(this.item.probability_status.replace(/\D/, ""))
    }
    get isExpire() {
        let currentDate: any = new Date().toISOString().slice(0, 10)
        // fake date because api is old 
        currentDate = new Date('2023-03-15');

        return new Date(currentDate).valueOf() > new Date(this.item.date).valueOf() ?
            true : false
    }
    get isReady() {
        return this.item.probability_status == '100%' ? true : false
    }
    get readyToProduction() {
        return this.item.status == 'Getting Ready' ? true : false
    }
    get alarm() {
        return this.item.probability_status == '100%' || this.isExpire ? true : false
    }


} 