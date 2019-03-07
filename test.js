var http = require('http');
var cache = require('memory-cache');
var microtime = require('microtime');

http.createServer(function (req, res) {
    for (let index = 0; index < 1000; index++) {
        cache.put(index, index);
    }

    console.log('Populated cache');

    let startTime = microtime.now();
    cache.get(10);
    console.log('Time taken: ' + (microtime.now() - startTime));

    startTime = microtime.now();
    cache.get(99);
    console.log('Time taken: ' + (microtime.now() - startTime));

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');  
}).listen(8080);
