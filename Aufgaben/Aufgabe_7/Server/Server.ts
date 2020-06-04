import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace Haushaltshilfe_7 {
    interface Order {
        [type: string]: string | undefined | string[];
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
    port = 5002;

    let databaseUrl: string = "mongodb+srv://dbPoschmann:2ILoveMedia3@poschmanneia2-goavs.mongodb.net/test?retryWrites=true&w=majority";

    startServer(port);
    connectDatabase(databaseUrl);

    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();

        console.log("Server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Household").collection("Orders");
        console.log("Database connection ", orders != undefined);
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's Up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                // switch (key) {
                //     case "einkauf":
                //     break;
                //     default:
                //     _response.write(key + ":" + url.query[key] + "<br>");
                //     break;
                // }
                _response.write(key + ":" + url.query[key] + "<br>");
            }

            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);
        }

        _response.end();
    }
    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }
}