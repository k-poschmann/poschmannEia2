"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Zauberbild;
(function (Zauberbild) {
    let orders;
    let mongoClient;
    let options;
    let allPics = [];
    let databaseUrl = "mongodb+srv://dbPoschmann:2ILoveMedia3@poschmanneia2-goavs.mongodb.net/test?retryWrites=true&w=majority";
    let port = process.env.PORT;
    if (port == undefined)
        port = 5002;
    startServer(port);
    connectDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port: " + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectDatabase(_url) {
        options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Album").collection("Pictures");
        console.log("Database connection ", orders != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's Up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_request.url);
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let spliturl = _request.url.split("&");
            if (spliturl[0] == "/?getPicture=yes") {
                let pictures = mongoClient.db("Album").collection("Pictures");
                let cursor = await pictures.find();
                await cursor.forEach(showPicture);
                let jsonString = JSON.stringify(allPics);
                // orders = mongoClient.db("Album").collection("Pictures");
                // await (orders).insertOne(url.query);
                _response.write(jsonString);
                allPics = [];
            }
            if (spliturl[0] == "/?findPicture") {
                let picture = mongoClient.db("Album").collection(spliturl[1]);
                let cursor = await picture.find();
                await cursor.forEach(showPicture);
                let jsonString = JSON.stringify(allPics);
                let answer = jsonString.toString();
                _response.write(answer);
                allPics = [];
            }
            if (spliturl[0] == "/?insertName") {
                let pictures = mongoClient.db("Album").collection("Pictures");
                await pictures.insertOne(url.query);
            }
            if (spliturl[0] == "/?savePicture") {
                let newCollection = mongoClient.db("Album").createCollection(spliturl[1]);
                await (await newCollection).insertOne(url.query);
            }
            // if (spliturl[0] == "/?getTitles") {
            //     let titles: Mongo.Cursor<any> = orders.find({ projection: { _id: 0, name: true } });
            //     await titles.forEach(showPicture);
            //     let jsonString: string = JSON.stringify(allPics);
            //     jsonString.toString();
            //     _response.write(jsonString);
            //     _response.write(titles.toString());
            //     allPics = [];
            //     console.log(titles);
            // }
            _response.end();
        }
        function showPicture(_item) {
            for (let key in _item) {
                allPics.push(key);
            }
        }
        // function storeOrder(_order: Picture): void {
        //     orders.insert(_order);
        // }
    }
})(Zauberbild = exports.Zauberbild || (exports.Zauberbild = {}));
//# sourceMappingURL=Server.js.map