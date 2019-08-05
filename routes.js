const fs = require('fs');

if(url==='/'){
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></body>');
    return res.end();
  }
  if(url==='/message' && req.method === 'POST'){
    const body = [];
    req.on('data',(chunk)=>{
      body.push(chunk);
    });

    req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err=>{
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
      })
    });

  }

  res.setHeader('Content-Type','text/html');
  res.write('first responce from server');
  res.end();