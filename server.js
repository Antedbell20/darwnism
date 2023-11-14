const path = require('path');
const express = require('express');
const session = require('express-session');
const xphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const routes = require('./controllers');
// const helmet = require('helmet');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = xphbs.create({ helpers });

const sesh = {
  secret:"]_zMsAE|bE16i`YDURr&l#Hz-CK:Da(nXD8'bcS~e1o(9s4-S_!QiCF*-CKHZ2%^P[;RDLL4A@!yi5u';8PacQpnQr&pH]SBt5C,",
  cookie: {
    maxAge: 3000000,
  },
  rolling: true,
  resave: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }) 
};

// app.use(helmet());
app.use(session(sesh));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});





// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening at http://localhost:3001'));
//   });