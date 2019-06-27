const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use((req, res, next) => {
    //Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin",
    "http://localhost:4200");

    //Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );

    //Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    // Set to true if you need the website to include
    // cookies in the requests sent
    // to the API (e/g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    //Pass to next layer of middleware
    next();
});

const api = express.Router();

// Method Get
api.get("/", (req, res) => // change route "/"
{
    res.json({
        success: true,
        message: "it works"
    });
});

// Method Get with Params
api.get("search/:term/:place?", (req, res) => 
{
    const term = req.params.term;
    const place = req.params.place || null;
    const data = '${term} et $ {place}';
    res.json({ success: true, data });
});

// Method Post
api.post ("/", (req, res) => {
    const provisoire = req.body;

    res.json({ success: true, provisoire});
})

app.use("/api", api); // localhost:3000/api/

const port = 3000;

app.listen(port, () => {
    console.log('Listening on port ${port}');
});