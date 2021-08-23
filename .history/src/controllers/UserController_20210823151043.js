const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async createUser(req, res){
        try {
            const{firstName, lastName, password, email} = req.body;
            const exsistingUser = await User.findOne({email});

            if (!exsistingUser){
                const hashPassword = await bcrypt.hash(password, 10);
                const user = User.create({
                    firstName:firstName, // There is short hand way as variable name is same as property for firstName, lastName and email.
                    lastName:lastName,  //You can just write the property name, e.g. firstName = firstName becomes just firstName.
                    password:hashPassword,
                    email:email // or can be written just email.
                });    
                return res.json(user);
            }
            return res.status(400).json({
                message: 'email/user already exist! Do you want to login instead?'
            });


            
        } catch (error) {
            throw Error(`Error whilst registering a new user: ${error}`)
        }
    },

    async getUserById(req, res){
        const { userID }  = req.params;

        try {
            const user = User.findById(userId);
            return res.json(users);
        } catch (error) {

            return res.status(400).json({
                message: 'UserID does not exsist Do you want to register instead?'
            })
        }
    }

}