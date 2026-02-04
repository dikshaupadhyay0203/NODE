import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    console.log("Request:", req.url);

    // PRODUCTS ROUTE
    if (req.url === "/products") {
        const apiRes = await fetch("https://dummyjson.com/products");
        const data = await apiRes.json();

        let productHTML = "";

        data.products.forEach(p => {
            productHTML += `
            <li>
                <h3>${p.title}</h3>
                <img src="${p.thumbnail}" width="150"/>
            </li>`;
        });

        const templatePath = path.join(__dirname, "temp.html");
        let html = fs.readFileSync(templatePath, "utf-8");

        html = html.replace("{{products}}", productHTML);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
        return;
    }

    // CSS ROUTE
    if (req.url === "/style.css") {
        const css = fs.readFileSync(path.join(__dirname, "style.css"));
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(css);
        return;
    }

    // DEFAULT ROUTE
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000/products");
});
