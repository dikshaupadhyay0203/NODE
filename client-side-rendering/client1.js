const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        console.log("HTML REQUESTED");

        const htmlPath = path.join(
            "C:/Users/archa/OneDrive/Desktop/PEP-MERN1/NODE/temp1/index.html"
        );

        const html = fs.readFileSync(htmlPath, "utf-8");

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    }
});

server.listen(3000, () => {
    console.log("CSR server running at http://localhost:3000");
});
