import {Client, IFetchRequest, Service} from "@crazyfactory/tinka";
import {ContentTypeMiddleware} from "./middlewares/ContentTypeMiddleware";
import {WrapMiddleware} from "./middlewares/WrapMiddleware";
import {Products} from "./nodes/Product";

export class Api extends Service {
    private static instances: { [key: string]: Api } = {};

    public static getInstance(endpoint: string = Api.getEndpoint()): Api {
        if (!Api.instances[endpoint]) {
            Api.instances[endpoint] = new Api(Api.setupMiddlewares(Api.getClient(endpoint)));
        }
        return Api.instances[endpoint];
    }

    public static getClient(baseUrl: string): Client {
        const request: IFetchRequest = {baseUrl};
        return new Client(request);
    }

    public static getEndpoint(): any {
        // tslint:disable-next-line
        console.log("process.env", process.env);
        if (process.env.NODE_ENV === "development") {
            return "http://localhost:7777"; //tslint:disable-line
        }
        if (process.env.NODE_ENV === "production") {
            return "https://services.bchurunway.com";//tslint:disable-line
        }
        alert("NODE_ENV NOT SET");
    }

    public get getProducts(): Products {
        return new Products(this.client);
    }


    private static setupMiddlewares(client: Client): Client {
        client.addMiddleware(new WrapMiddleware());
        client.addMiddleware(new ContentTypeMiddleware());
        return client;
    }
}
