import {Api} from "./Api";

describe("API", function() {
    it("should run without constructor", function() {
        expect(
            new Api()
        ).not.toThrow;
    });

    it("should create an Instance", function() {
        const api = Api.getInstance();
        expect(api).toBeDefined();
    });

    it("should return correct URL for Development and production", function() {
        const arr = [
            {
                env: "development",
                expected: "http://localhost:7777"
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

    it("should have a get method for products", function() {
        const api = Api.getInstance();
        expect(api.products).toBeDefined();
    });
});