import {IFetchRequest, Service} from "@crazyfactory/tinka";
import autobind from "autobind-decorator";

export interface IItems {
  deposit: number;
  insurance: number;
  price: string;
}

export interface IOrders {
  TotalPrice: number;
  _id?: string;
  createdAt: string;
  deposit: number;
  discount: number;
  insurance: number;
  items?: IItems[];
  orderId: string;
  subTotal: number;
  vat: number;
}

export interface ISummary {
  TotalPrice?: number;
  deposit?: number;
  insurance?: number;
  discount?: number;
  subTotal?: number;
  vat?: number;
}

export interface IData {
  count: number;
  orders: IOrders[];
  summary: ISummary;
  type: string;
}

export interface IError {
  error: string;
  orderId: string;
}

export interface IPeakParent {
  count: number;
  data: IData[];
  error_count: number;
  error_details: IError[];
  ok?: boolean;
  start_date: string;
  end_date: string;
}

export class PeakMonthly extends Service {
  @autobind
  public getData(startDate: string, endDate: string): Promise<IPeakParent> {
    const request: IFetchRequest = {
      url: `/peak_submit?date=${startDate}&end_date=${endDate}`
    };
    return this.client.process(request);
  }
}
