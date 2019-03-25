import {IFetchRequest, Service} from "@crazyfactory/tinka";
import autobind from "autobind-decorator";

export interface IProduct {
    name: number;
    productId: number;
    description: number;
}

export class Products extends Service {
    @autobind
    public getData(): Promise<IProduct[]> {
        const request: IFetchRequest = {
            url: `/products`
        };
        return this.client.process(request);
    }
}