const validator = require("validator");

function validuser(data){
    // Validate kiya uske andar firstName 
        // req.body ke andar data aaya hai, usme firstname, email, age hona chahiye
        const MendatoryFields = ["firstname", "email","age","password"]
        const IsAllowed = MendatoryFields.every((k)=> Object.keys(data).includes(k));
        if(!IsAllowed) 
            throw new Error("Filled Missing")

        // email check 
        if(!validator.isEmail(data.email))
            throw new Error("Email is not valid");

        // password check 
        if(!validator.isStrongPassword(data.password))
            throw new Error("Password is not Valid");

        // username valid check 
        if(!(data.firstname.length>=3 && data.firstname.length <20))
            throw new Error("firstname is not valid");
}

module.exports = validuser;