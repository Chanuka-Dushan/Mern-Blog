import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res,next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    next(errorHandler(400,"Please fill all fields"))
  }
  const hashedPassword=bcryptjs.hashSync(password,10);

  const newUser = new User({ 
    username,
    email,
    password :hashedPassword,
 });

 try{
 await newUser.save();
 res.json( "Signup success" );
 }catch(err){
      next(err);
 }
};
