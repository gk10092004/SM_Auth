require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const userRoute = require('./routes/userRoute');
app.use('/api',userRoute);

require('./db/connection')
const User = require('./Models/User')
const UserOtp = require('./Models/VerifyOtp')
// const passUpdate = require('./Models/PassUpdate')
// from here to
app.post("/signup",(req,res)=>{
    User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
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


// step 1 form collecting data form client to store in mongodb and go to give url 

/*
backend file:
    step 1 : install mongoose, nodemon, express
    command : npm i mongoose nodemon express 

    step 2 : run the simple express hello word
    step 3 : create the schema for user other other in "backend/Models/User"
    step 4 : connect mongodb in index.js or seperate file like " backend/bd/connection"
    step 5 : require mongodb connection in index.js and store user schema in User
    step 6 : write this below code here "/" mean route were post operation perform
    app.post("/",(req,res)=>{
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.json(err))
    })
    step 6 : "/" in index.js is equivalent to "http://localhost:3000/" in react js

client side (ctom) file:
    instll axios
    command : npm i axios
    import axios from 'axios';
    step 7 : create ui of the login page in form
    step 8 : store all input in variable using useState by onChange((e)=>{setName(e.target.value)})
    step 9 : create onSubmit = {collectData} this is function on form tag
    step 10 : write this below page in collection function
    const collectData = (e) => {
        //from here to 
        e.preventDefault();
        axios.post('http://localhost:3000/',{name,email,password})//send this data to give url
        .then(result => console.log(result))
        .catch(err => console.log(err))
        //here 

    }
    step 11 : in sign up componet here is (Registation.jsx) 
        import {useNavigate} from 'react-router-dom' after (npm i react-router-dom)
        and make 
        const navigate = useNavigate()
        give 
        navigate('/login') in collectData function inside .then(result => {navigate('/login')})
        then go to main.jsx copy from ( here) paste where you use make change accordingly

*/

// step to fetch data from mongodb form login
