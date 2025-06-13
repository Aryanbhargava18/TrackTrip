import bcryptjs from 'bcryptjs';
import user from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if(!username || !email || !password || username==="" || email==="" || password==="") {
        return next(errorHandler(400, 'Please fill in all fields'));
}
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new user({
        username,
        email,
        password: hashedPassword, 
    })
    try {
        await newUser.save();
        res.json("Signup successful");
    }
    catch(error){
        res.status(500).json({ message: error.message });    
    }
}     