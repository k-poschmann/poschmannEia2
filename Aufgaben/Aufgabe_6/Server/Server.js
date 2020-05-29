"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
var Haushaltshilfe_6;
(function (Haushaltshilfe_6) {
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5002;
    console.log("Server starting on port: " + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("What's Up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
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
})(Haushaltshilfe_6 = exports.Haushaltshilfe_6 || (exports.Haushaltshilfe_6 = {}));
//# sourceMappingURL=Server.js.map