const bcrypt = require('bcryptjs');

module.exports = {

    register: async(req, res) => {
        const { username, email, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(username, email);
        user = user[0];
        if(user){
            return res.status(400).send('Username already exists')
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUser = awaitdb.register_user({ email, username, hash });
        newUser = newUser[0];
        res.status(201).send(session.user);
    },


    login: async(req, res) => {
        const { username, password } = req.body;
        const { session } = req;
        const db = req.app.get('db');

        let user = await db.check_user(email, username)
        user = user[0];

        if(!user){
            return res.status(401).send('Username not found')
        }

        const authenticated = bcrypt.compareSync(password, user.hash);
        if (authenticated){
            delete user.hash;
            session.user = user;
            res.status(202).send(session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    },


    logout: async(req, res) => {
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