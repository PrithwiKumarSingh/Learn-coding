import validator from 'validator';

export function validuser(data){

    const MendatoryFields = ["firstname", "email","password", "age"];
    const IsAllowed = MendatoryFields.every((k)=> Object.keys(data).includes(k));

    if(!IsAllowed)
        throw new Error ("Filling Missing"); 


    if(!(validator.isEmail(data.email)))
        throw new Error ("Email is Not Valid");

    if(!(validator.isStrongPassword(data.password)))
        throw new Error("Password is Not to Week");

    if(!(data.firstname.length >=3 && data.firstname.length <= 20))
        throw new Error("firstname is not Valid");

}