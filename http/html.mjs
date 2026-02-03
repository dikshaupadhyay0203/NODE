import http from "http"

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  })

  res.end(`
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Hello from Backend</h1>
        <p>This HTML is sent by Node.js</p>
      </body>
    </html>
  `)
})

server.listen(3000)

