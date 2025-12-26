const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // 1. Set the header to tell the browser to render HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // 2. Send the heading and the server directory information
    res.write('<h1>Hello</h1>');
    res.write(`<p><strong>Server Directory:</strong> ${__dirname}</p>`);
    
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}/`);
    console.log(`Server Folder: ${__dirname}`);
});