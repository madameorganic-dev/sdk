import {IFetchRequest, Service} from "@crazyfactory/tinka";
import autobind from "autobind-decorator";

export interface IProduct {
    name: string;
    productId: string;
    description: string;
    createdBy: string;
    isActive?: boolean;
    isDeleted: boolean;
    masterProductId: string;
    productType: string;
    type: string;
    useTime: string;
}

export class Products extends Service {
    @autobind
    public getData(): Promise<IProduct[]> {
        const request: IFetchRequest = {
            url: `http://localhost:7777/products` //tslint:disable-line
        };
        return this.client.process(request);
    }

    @autobind
    public create(options: IProduct): Promise<IProduct> {
        const request: IFetchRequest = {
            body: JSON.stringify(options),
            method: "POST",
            url: `http://localhost:7777/products` //tslint:disable-line
        };
        return this.client.process(request);
    }

}