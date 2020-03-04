const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  res.send({
    msg: `Your user was registered with ${req.body.email}!`
  });
});

app.listen(process.env.PORT || 8081);
