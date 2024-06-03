const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema(
    {
        user_email : {
            // required : true,
            type : String
            // ref : 'users'
        },
        otp : {
            type : Number,
            // required : true
        },
        otpExpire : {
            type : Date,
            default : Date.now,
            // required : true,
            get : (otpExpire) => otpExpire.getTime(),
            set : (otpExpire) => new Date(otpExpire)
        }
    }
);

module.exports =  mongoose.model("userOtp", otpSchema );