const express = require('express')
const app = express()
const render = require('./render')();

app.get('/', function (req, res) {
  res.send(render({name: 'jimmy'}));
});

app.listen(1234, function () {
  console.log('Example app listening on port 3000!')
})
