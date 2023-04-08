import { DealModel } from "./deal-model";
export type Stage = 'Potential Value' | 'Focus' | 'Contact Made' | 'Offer Sent' | 'Getting Ready';
export type IDataList = { [stage in Stage]: DealModel[] };
export class DealStatgeList {
    public items: IDataList = <IDataList>{ "Contact Made": [], "Getting Ready": [], "Offer Sent": [], "Potential Value": [], "Focus": [] }
    public newItems: IDataList = <IDataList>{ "Contact Made": [], "Getting Ready": [], "Offer Sent": [], "Potential Value": [], "Focus": [] }
    constructor(private dealModels: DealModel[], private previousDealList: DealStatgeList) {
        this.itemsMap()
    }

    private itemsMap() {
        this.dealModels.forEach(item => {
            let stage = <Stage>item.item.status
            this.items[stage].push(item);
        })
    }

    totalAlarm(statge: Stage) {
        let alarms = 0
        this.items[statge].forEach(listItem => listItem.alarm ? alarms += 1 : null)
        return alarms

    }
}