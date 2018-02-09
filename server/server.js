
const express = require('express');
const app = express();

app.use(express.static('server/public'));
const bodyParser = require('body-parser');
app.use ( bodyParser.urlencoded({extended:true}));

const randomRouter = require('./router/randomRouter');
app.use('/random',randomRouter);
console.log('in server.js',randomRouter.ourRandomNumber);

const port = 5000;
app.listen(port, function(){
  console.log(`listening on port ${port}`);
});
