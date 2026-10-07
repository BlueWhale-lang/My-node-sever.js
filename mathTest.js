//imports HTTP under name https
const http = require('http');

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
  // 1. Create a URL object out of the request URL to easily read parameters
  // We use a dummy base URL "http://localhost" because req.url only gives us relative paths like "/?num1=5"
  const parsedUrl = new URL(req.url, 'http://localhost');
  res.writeHead(400, { 'Content-Type': 'text/plain' });

  if(parsedUrl.pathName === '/'){
    const operation = parsedUrl.searchParams.get('operation');
    const num1String = parsedUrl.searchParams.get('num1');
    const num2String = parsedUrl.searchParams.get('num2');
    
    if(anyNull(operation, num1String, num2String)){
      res.end('not all parameters entered. e.g localhost:4000/?num1=2&num2=3&operation=+');
    }
    
    if(wrongForm(operation, num1String, num2String)){
      res.end('at least one parameter is the wrong form. operations accepted are +, -, *, /, and ^');
    }
    
    num1 = Number(num1String);
    num2 = Number(num2String);

    res.end(String(doMath(num1, num2, operation)));
});


server.listen(4000, () => {
  console.log(`Server is running! Open your browser and go to: http://localhost:4000`);
});
  