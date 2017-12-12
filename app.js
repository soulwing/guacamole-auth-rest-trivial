const fs = require("fs");
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const usersContent = fs.readFileSync("user-mapping.json");
const users = JSON.parse(usersContent);

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json()); 

app.post('/authorization', function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = users[username];
  const auth = {};
  auth.authorized = username && password && user && user.password === password;
  if (auth.authorized) {
    auth.configurations = user.configurations;        
  }
  res.send(auth);
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
});
