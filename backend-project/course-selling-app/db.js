const {Schema, default: mongoose} = require("mongoose");
const ObjectId = mongoose.Types.ObjectId

const userSchema = new Schema({
    email : {
        type: String,
        unique: true,
        required: true
    },
    password:{
        type : String, 
        required : true,
    },
    firstName: {
        type: String, 
        required: true
    },
    lastName:{
        type: String, 
        required: true
    }
    
})
const courseSchema = new Schema({
    title:{
        type : String, 
        minLength: 3, 
        maxLength: 30
    }, 
    description:{
        type: String,
        maxLength: 200
    },
    price: {
        type : Number, 
        required : true
    },
    imageUrl:{
        type: String
    },
    creatorId: {
        type: ObjectId,
    }
    

})
const adminSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    password:{
        type : String, 
        required : true,
        
    },
    firstName: {
        type: String, 
        required: true
    },
    lastName:{
        type: String, 
        required: true
    }

})
const purchaseSchema = new Schema({
    courseId: {
        type : ObjectId,
        required: true
    }, 
    userId:{
        type : ObjectId,
        required: true
    }

})

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const adminModel = mongoose.model("admin", adminSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    courseModel,
    adminModel,
    purchaseModel
}


