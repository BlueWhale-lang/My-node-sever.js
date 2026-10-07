


const http = require('http');
const PORT = process.env.PORT || 3000; // Render sets process.env.PORT automatically!

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to my Node.js Homepage!</h1><p>This is dynamic HTML content.</p>');
    } 
    

    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1><p>I built this server completely from scratch!</p>');
    } 
    
  
    else if (req.url === '/api/user') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const userData = {
            username: "developer_pro",
            status: "active",
            skills: ["Node.js", "Git", "JavaScript"]
        };
        res.end(JSON.stringify(userData));
    } 
    
    
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1><p>Oops! That page doesn\'t exist.</p>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
