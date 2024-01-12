const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Welcome to our ABOUT page')
    }
    res.end(`
    <h1> oops! 404</h1>
    <a href='/'>home page</a>
    `)
})

server.listen(5000)