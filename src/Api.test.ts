import {Api} from "./Api";

describe("API", () => {
    it("should create an Instance", () => {
        const api = Api.getInstance();
        expect(api).toBeDefined();
    });

    it("should return correct URL for Development and production", () => {
        const arr = [
            {
                env: "development",
                expected: "http://localhost:7777" // tslint:disable-line
            },
            {
                env: "production",
                expected: "https://services.bchurunway.com"
            }
        ];
        arr.map((expected) => {
            process.env.NODE_ENV = expected.env;
            expect(Api.getEndpoint()).toEqual(expected.expected);

        });
    });

    it("should have a get method for products", () => {
        const api = Api.getInstance();
        expect(api.products).toBeDefined();
    });
});