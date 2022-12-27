const http = require('http')
const fs = require('fs')

function readSiteFile(pageName ,res) {
  fs.readFile(pageName+'.html',(error, data) => {
    res.writeHead(200, {'Content-Type':'text/html'})
    res.write(data)

    return res.end()
  })
}

http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      readSiteFile('index', res)
      break;
    case '/about':
      readSiteFile('about', res)
      break;
    case '/contact-me':
      readSiteFile('contact-me', res)
      break;

    default:
      readSiteFile('404', res)

      break;
  }

  
}).listen(8080, () => console.log('server rodando...'))