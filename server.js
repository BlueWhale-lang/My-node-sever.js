
const http = require('http');

const PORT = 3000;

function anyNull(a, b, c){
  if(a != null && b != null && c != null){
    return false;
  }
  return true;
}
  console.log('got past parsing url');

function wrongForm(operate, numA, numB){
  if(isNaN(Number(numA)) || isNaN(Number(numB))){
    return true;
  }
  if(!(operate.equals('+') || operate.equals('-') || operate.equals('/') || operate.equals('*') || operate.equals('^'))){
    return true;
  }
  return false;
}

function doMath(a, b, operate){
  if(operate.equals('+')){
    return a+b;
  } else if (operate.equals('-')){
    return a-b;
  } else if (operate.equals('*')){
    return a*b;
  } else if (operate.equals('/')){
    return a/b;
  } else if (operate.equals('^')){
    return a**b;
  }
  return 0;
}


const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    

    res.end('Hello, World! Your Node.js server is working.');
});


server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
