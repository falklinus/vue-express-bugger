const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/status', (req, res) => {
  res.send({
    msg: 'Hello World'
  });
});

app.listen(process.env.PORT || 8081);
