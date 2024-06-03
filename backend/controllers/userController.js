const Otp = require('../Models/VerifyOtp');
const mailer = require('../helpers/mailer');
const {validationResult} = require('express-validator');
require('../db/connection')
const users = require('../Models/User')
//verification of otp
const generateOtp = async() => {
    return Math.floor(100000 + Math.random()*900000);
}
const sendOtp = async(req,res) => {
        const getOtp = await generateOtp();
        const { email } = req.body;
        await users.findOne({email})
        .then(user => {
            if(user){
                if(user.email == email){
                    res.json("email found")
                    const sendToDb = new Otp({//
                        user_email : user.email,
                        otp : getOtp            
                    });
                    sendToDb.save();
                    const msg = '<p> Hi <b>' + user.name + ',<br> </b> <n>Otp is </n> <b>'+ getOtp +'</b> </p>';
                    mailer.sendMail(user.email, 'Otp Verification ',msg);//in helper folder
                    
                }
            }
            else{
                res.json("email not found");
            }
        })
}
const sendPass = async(req,res) => {
    const { email,password } = req.body;
    await users.findOne({email})
    .then(user => {
        if(user){
            if(user.email == email){
                res.json("update and sent email")
                const msg = '<p> Hi <b>' + user.name + ',<br> </b> <h4>'+ password +'</h4> </p>';
                mailer.sendMail(user.email, 'Otp Verification ',msg);//in helper folder
                
            }
        }
        else{
            res.json("email not found");
        }
    })
}

module.exports = {
    sendOtp,
    sendPass
}