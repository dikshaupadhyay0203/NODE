import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {

  if (req.url === "/products") {
    const apiRes = await fetch("https://dummyjson.com/products");
    const data = await apiRes.json();

    let productsHTML = "";

    data.products.forEach(p => {
      productsHTML += `
        <div class="card">
          <h3>${p.title}</h3>
          <img src="${p.thumbnail}" />
        </div>
      `;
    });

    let html = fs.readFileSync(
      path.join(__dirname, "temp.html"),
      "utf-8"
    );

    html = html.replace("{{products}}", productsHTML);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    return;
  }

  if (req.url === "/style.css") {
    const css = fs.readFileSync(
      path.join(__dirname, "style.css")
    );
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(css);
    return;
  }

  res.writeHead(404);
  res.end("Route not found");
});

server.listen(3000, () => {
  console.log("SSR running at http://localhost:3000/products");
});
