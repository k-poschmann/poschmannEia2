import * as Http from "http";
import * as Url from "url";

export namespace Haushaltshilfe_6 {
    let server: Http.Server = Http.createServer();

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
    port = 5002;

    console.log("Server starting on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("What's Up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                switch (key) {
                    case "einkauf":
                    break;
                    default:
                    _response.write(key + ":" + url.query[key] + "<br>");
                    break;
                }
            }
        }

        _response.end();
    }
}