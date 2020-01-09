require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      authCtrl = require('./authController'),
      tripCtrl = require('./tripController'),
      payCtrl = require('./paymentController'),
      gradient = require('gradient-string'),
      { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, STRIPE_SECRET } = process.env,
      app = express();
      stripe = require('stripe') (process.env.STRIPE_SECRET);


app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(gradient.atlas('Searching for DB Cooper'))
})


// Authentication Endpoints

app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.post('/api/logout', authCtrl.logout);
app.get('/api/auth/:user_id', authCtrl.getUser);

app.get('/api/airports', ctrl.getAirports);
app.post('/api/booktrip', tripCtrl.bookTrip);

app.get('/api/upcomingtrips/:user_id', tripCtrl.getTrips);
app.put('/api/upcomingtrips', tripCtrl.editTrip);
app.delete('/api/upcomingtrips/:id', tripCtrl.deleteTrip);

app.post('/api/payment', payCtrl.pay);


const port = SERVER_PORT;
app.listen(port, () => console.log(gradient.pastel(`Mission ${port} ready for take-off in 3, 2, 1!`)));