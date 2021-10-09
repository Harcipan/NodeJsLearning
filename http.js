const http = require('http')

const server = http.createServer((req, res) =>{
    if(req.url ==='/'){
        res.write('Welcome to our home page');
    }
    else if(req.url==='/about'){
        res.write(`<a href="/">Back Home</a>`);
        res.write('Here is our short history');
    }
    else{
    res.write(`
    <h1>Oops!</h1>
    <p>We don't have a page like that!</p>
    <a href="/">Home Page</a>
    `);
    }
    res.end();
})

server.listen(5000)