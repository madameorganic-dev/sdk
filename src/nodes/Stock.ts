import {IFetchRequest, Service} from "@crazyfactory/tinka";
import autobind from "autobind-decorator";

export interface IStock {
    createdBy: string;
    productId: string;
    serialnumber: string;
}

export class Stock extends Service {
    @autobind
    public getData(): Promise<IStock[]> {
        const request: IFetchRequest = {
            url: `/stock`
        };
        return this.client.process(request);
    }

    @autobind
    public updateData(id: string, options: IStock): Promise<IStock> {
        const request: IFetchRequest = {
            body: JSON.stringify(options),
            method: "PUT",
            url: `/stock/${id}`
        };
        return this.client.process(request);
    }

    @autobind
    public create(options: IStock): Promise<IStock> {
        const request: IFetchRequest = {
            body: JSON.stringify(options),
            method: "POST",
            url: `/stock`
        };
        return this.client.process(request);
    }

}