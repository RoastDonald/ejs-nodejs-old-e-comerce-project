const fs = require('fs');
const { database } = require('faker');

const requestHandle = (req, res) => {
  const { url } = req;
  const { method } = req;
  res.setHeader('Content-type', 'text/html');
  if (url === '/') {
    res.write(
      `<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form>`
    );
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedData = Buffer.concat(body).toString();
      const message = parsedData.split('=')[1];
      fs.writeFile('message.txt', message, () => {
        res.writeHead(302, '/');
        return res.end();
      });
    });
  }
  res.write('<h1>home</h1>');
  res.end();
};
module.exports = {
  handle: requestHandle,
  someText: 'text',
};
// module.exports = database
// exports.wa = wa;

// module.exports.test = this.test
