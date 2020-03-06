var http = require('http')
var createHandler = require('github-webhook-handler')
var execSh = require("exec-sh")
var handler = createHandler({ path: '/webhook', secret: 'PYMBR3J57iTNz2eo' })
 
http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(1337)
 
handler.on('error', function (err) {
  console.error('Error:', err.message)
})


handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
    if (event.payload.ref == "refs/heads/master") {
      execSh("./build.sh", {cwd : "/root/docusaurus"}, function(err){
          if (err) {
            console.log("Exit code: ", err.code);
            return;
          }
      })
    }


})
 
handler.on('issues', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})