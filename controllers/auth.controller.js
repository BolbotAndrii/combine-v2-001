const User = require("../models/Users/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const config = require("config");

const generateToken = (id, role) => {
    const payload = {
        userId: id,
        role
    }
    return jwt.sign(payload, config.get('jwtSecret'), { expiresIn: '1h' })
}

const Login = async (req, res, next) => {
    try {

        const  { userEmail, userPassword } = req.body

        if ( !userEmail || !userPassword ) {
            return	next( res.status( 400 ).json( { message:  "Login or password is can't be empty! " } ) )
        }

        const user = await User.findOne({ userEmail } )

        if( !user ) {
            return next( res.status( 400 ).json({ message: 'User is not found !' } ) )
        }

        const isMatch = bcrypt.compareSync( userPassword, user.userPassword )

        if( !isMatch ) {
            return next( res.status( 400 ).json( { message: 'Login or password is not correct!' } ) )
        }

        const token = generateToken( user._id, user.userGroup )

        return res.json( { token: token, name: user.userName, mark: user.userMark, userId: user._id, coins: user.userCoins, group: user.userGroup  } )

    }

    catch (e){
        res.status(500).json({ message: "Unknown server error" } )
    }
}

module.exports = { Login }