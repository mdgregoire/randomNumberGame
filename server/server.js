
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use ( bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));
const randomRouter = require('./router/randomRouter');
app.use('/random',randomRouter);

const port = 5000;
app.listen(port, function(){
  console.log(`listening on port ${port}`);
});//end app listen



