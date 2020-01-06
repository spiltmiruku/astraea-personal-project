const bcrypt = require('bcryptjs');

module.exports = {

    register: async(req, res) => {
        const { username, email, password, passenger_firstname, passenger_lastname } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(username);
        user = user[0];
        if(user){
            return res.status(400).send('Username already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user({ email, username, hash, passenger_firstname, passenger_lastname });
        newUser = newUser[0];
        
        session.user = {
            email: newUser.email,
            username: newUser.username,
            passenger_firstname: newUser.passenger_firstname,
            passenger_lastname: newUser.passenger_lastname,
            id: newUser.user_id
        }

        res.status(201).send(session.user);
    },


    login: async(req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(username)
        user = user[0];

        if(!user){
            return res.status(401).send('Username not found')
        }

        let retrievedPassword = await db.get_password({user_id: user.user_id})
        if (!retrievedPassword){
            return res.status(401).send('Password not found')
        }

        const authenticated = bcrypt.compareSync(password, retrievedPassword[0].password);
        if (authenticated){

            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },

    logout: async(req, res) => {
        // console.log('hit')
        req.session.destroy();
        res.sendStatus(200);
    },

    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(200).send('');
        }
    },

}