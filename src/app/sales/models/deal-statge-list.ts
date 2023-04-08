import { DealModel } from "./deal-model";
export type Stage = 'Potential Value' | 'Focus' | 'Contact Made' | 'Offer Sent' | 'Getting Ready';
export type DataListItem = { data: DealModel, position: number }
export type IDataList = { [stage in Stage]: DataListItem[] };
export class DealStatgeList {
    public items: IDataList = <IDataList>{ "Contact Made": [], "Getting Ready": [], "Offer Sent": [], "Potential Value": [], "Focus": [] }
    constructor(private dealModels: DealModel[], private previousDealList: DealStatgeList) {
        this.itemsMap()
    }

    private itemsMap() {
        let itemList = this.dealModels.map((model, index) => {
            let previousPosition: number = index;
            if (this.previousDealList.items) {
                previousPosition = <number>this.previousDealList?.items[<Stage>model.statge].find(e => e.data.id == model.id)?.position
            }
            return {
                data: model,
                position: previousPosition
            }
        })


        itemList.forEach(item => {
            let stage = <Stage>item.data.item.status
            this.items[stage].push(item);
            this.items[<Stage>stage].sort((a, b) => a.position - b.position);
        })
    }

    totalAlarm(statge: Stage) {
        let alarms = 0
        this.items[statge].forEach(listItem => listItem.data.alarm ? alarms += 1 : null)
        return alarms

    }
}