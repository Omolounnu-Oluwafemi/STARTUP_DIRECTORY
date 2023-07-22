import * as fs from "node:fs";
import http from "node:http";
import url from "node:url";
import  {replaceTemplate} from "./modules/replaceTemplate.js"

const startUp = fs.readFileSync("templates/startup.html", "utf-8")
const startUpCard = fs.readFileSync("templates/startup_card.html", "utf-8")
const StartUpOverview = fs.readFileSync("templates/startup_overview.html", "utf-8")


const data = fs.readFileSync(`data/data.json`, "utf-8")
const  dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
 // const pathname = req.url;
  const {query, pathname} = url.parse(req.url, true)


  //Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });

    const cardsHtml = [];
    dataObj.forEach((element) => {
      cardsHtml.push(replaceTemplate(startUpCard, element));
      });

      const finalHtml = cardsHtml.join('');
      const output = StartUpOverview.replace(`{%ORGANIZATION_CARD%}`, finalHtml);
      res.end(output);

  //All Startups page
  } else if (pathname === "/startups") {
    res.writeHead(200, { "Content-type": "text/html" });
    const startup = dataObj[query.id]
    const output = replaceTemplate(startUp, startup)
    res.end(output);
    

    // API
  } else if (pathname === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data)
  
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found! <h1>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server listening on port 3000");
});
