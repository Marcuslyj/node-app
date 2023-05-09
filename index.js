import http from 'http'

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.end('hello')
  })
  .listen(3000)