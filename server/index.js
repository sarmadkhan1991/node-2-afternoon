const express = require('express');
const app = express();
const mc = require('./controller/messages_controller');
app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

const baseUrl = '/api/messages';

app.get(baseUrl, mc.read);

app.post(baseUrl, mc.create);

app.put(baseUrl + '/:id', mc.update);

app.delete(baseUrl + '/:id', mc.delete);






const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port}`));