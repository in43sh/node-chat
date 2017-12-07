const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + './server/controllers/messages_controller.js');

const app = express();
app.use( bodyParser.json() );
app.post('/api/messages', mc.create);
app.get('/api/messages/', mc.read);
app.update('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.listen(3000, () => {
  console.log('Server listening to port 3000 ' + 3000);
});