const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/Login_Signup_form")
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));