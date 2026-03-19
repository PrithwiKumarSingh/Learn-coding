import mongoose from "mongoose"; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


const UserSchema = new mongoose.Schema({
    firstname: {
        type:String, 
        require: true, 
        uppercase: true,
    }, 
    lastname: {
        type : String, 
        uppercase: true,
        minLength : 3,
        maxLength : 25,
    },
    password: {
        type: String, 
        required: true,
    }, 
    age: Number, 
    gender: {
        type : String, 
        enum : ["male", "female", "other"],

    }, 
    email: {
        type: String, 
        unique : true,
        immutable: true,
        maxLength: 200,
    }
}, {timestamps:true});

UserSchema.methods.getJWT = function (){
    const token =   jwt.sign({email:this.email, id:this.id },process.env.KEY,{expiresIn:100});
    return token;
}

UserSchema.methods.verifyPassword = async function(password){
    const ans = await bcrypt.compare(password,this.password);
    return ans;

}

export const User  = mongoose.model("user", UserSchema);



