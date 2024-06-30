require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://sm-auth-frontend.vercel.app"],
        methods:["POST","GET"],
        credentials: true
    }
))
const userRoute = require('./routes/userRoute');
app.use('/api',userRoute);

require('./db/connection.js')
const User = require('./Models/User')
const UserOtp = require('./Models/VerifyOtp')
app.post("/signup",(req,res)=>{
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.get("/signup",(req,res)=>{
    res.send("signup");
})
//here this send data in database User

//from here to 
app.post("/login",(req,res)=>{
    const {email,password} = req.body;
    User.findOne({email:email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Successfully")//this is use in Login.jsx for condition
            }
            else{
                res.json("password is incorrect")
            }
        }
        else{
            res.json("user does not exist")
        }
    })
})

app.get("/api/send-otp",(req,res) => {
    UserOtp.find({}).then(function(user){
        res.json(user)
    }).catch(function(err){
        console.log("error")
    })
});
app.post("/api/password-reset",(req,res)=>{
    const {email,password} = req.body;
    User.updateOne({email:email},{$set:{password:password}})
    .then(results => {
        res.json(results)
    })
})


// here check user exist or not if exist with save pasword then login successfull


app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(3000,()=>{
    console.log("listen at 3000")
})

