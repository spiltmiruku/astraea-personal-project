require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      session = require('express-session'),
      ctrl = require('./controller'),
      authCtrl = require('./authController'),
      tripCtrl = require('./tripController'),
      gradient = require('gradient-string'),
      { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
      app = express();
    //   stripe = require('stripe')('sk_test_40DTj8R96Ni1aW6z7qJlJWLs00OPzKKChU');


app.use(express.json());

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


// (async () => {
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: 99999,
//         currency: 'usd'
//     });
// })();

// Authentication Endpoints

app.post('/api/auth/register', authCtrl.register);
app.post('/api/auth/login', authCtrl.login);
app.post('/api/logout', authCtrl.logout);


app.get('/api/auth/:user_id', authCtrl.getUser);

app.get('/api/airports', ctrl.getAirports);

app.post('/api/booktrip', tripCtrl.bookTrip);

app.get('/api/upcomingtrips/:user_id', tripCtrl.getTrips);


// app.get('api/auth/upcomingtrips')


const port = SERVER_PORT;
app.listen(port, () => console.log(gradient.pastel(`Mission ${port} ready for take-off in 3, 2, 1!`)));