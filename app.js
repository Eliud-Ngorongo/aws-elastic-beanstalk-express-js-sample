const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!, Now running on AWS. And after this we have succesfully built a pipeline!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);