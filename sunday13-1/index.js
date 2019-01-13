const express = require('express');
const port = 8080;
const app = express();

app.get('/', (req, res, next) =>{

});

app.listen(port, () => console.log('Server listening on', port));
