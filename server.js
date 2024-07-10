const dev = process.env.NODE_ENV !== "production";
const app = require("next")({dev});
const express = require("express");

const cors = require("cors")

app.prepare().then(() => {
    const config = require("./config");
    if(!config.PORT){
        throw new Error("PORT is required in config File");
    }
    let http,io;
    const server = new express();
    server.use(cors({origin:"*"}))
    server.use(express.static("express-static"));
    require("./routes/frontend")({server,app});
    const PORT = process.env.PORT || config.PORT;
    http = require("http").Server(server);
    io = require("socket.io")(http);
    http.listen(PORT);
    const ENV = process.env.NODE_ENV || "dev";
    console.log("* * * * * * * * * * * *");
    console.log("* Suppkart SSR Started  *");
    console.log(`* PORT: ${PORT} ${" ".repeat(13 - PORT.toString().length)}*`);
    console.log(`* ENV : ${ENV} ${" ".repeat(13 - ENV.length)}*`);
    console.log("* * * * * * * * * * * *");
}).catch((e) => {
    console.log("* * * ERROR * * *");
    console.log(e);
    console.log(e.message);
    console.log("* * * ERROR * * *");
    process.exit(1);
});