import {IFetchRequest, Service} from "@crazyfactory/tinka";
import autobind from "autobind-decorator";

export interface IProduct {
    deposit?: number;
    deposit_totals?: number;
    deposit_vat?: number;
}

export class Products extends Service {
    @autobind
    public getData(): Promise<IProduct> {
        const request: IFetchRequest = {
            url: `/products`
        };
        return this.client.process(request);
    }
}
