const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();

app.use(cors());
app.use(express.json());

require('./passport');

require('./routes')(app);

sequelize.sync().then(() => {
  app.listen(config.PORT || 8081);
  console.log(`Server started on port ${config.port}`);
});
