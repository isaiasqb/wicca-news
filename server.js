const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// t u r n   o n   r o u t e s
app.use(routes);

// t u r n   o n   c o n n e c t i o n   t o   d b   &   s e r v e r
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Wicca News server is ON'));
});