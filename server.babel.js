import express from 'express';

const app = express();

app.use('/', express.static('src/client'));

app.listen(process.env.PORT || 3000);