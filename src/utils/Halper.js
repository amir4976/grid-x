const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

export const Bcript = (password)=>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

export const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

export const generateToken = (email) => {
    console.log(email)
    return jwt.sign({email}, process.env.NEXT_PUBLIC_JWT_SECRET, { expiresIn: 60 * 60});
}