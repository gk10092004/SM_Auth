import React, { useRef, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/cmedial.png';

const PassForget = () => {
    const [otpbtn , setOtpbtn] = useState("Send Otp");
    const [email,setEmail] = useState();
    const VerifyBtn = useRef();
    const EnterOtp = useRef();
    const ReadOnly = useRef();
    const emailOtp = useRef();
    const newPass = useRef();
    const [currentOtp,setCurrentOtp] = useState();
    const [getCurrentOtp,setGetCurrentOtp] = useState();
    const [password,setCreatePass] = useState();
    const [confirmPass,setConfirmPass] = useState();
    const navigate = useNavigate();
    const SendOtp = async(e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/send-otp',{email})
        .then(async(result) => {
            if(result.data == "email found"){
                setOtpbtn("Resend Otp");
                VerifyBtn.current.style.display = "block";
                EnterOtp.current.style.display = "flex";
                ReadOnly.current.setAttribute('readonly','readonly');
                ReadOnly.current.style.color = "#5a5a5a";
                let data = await fetch("http://localhost:3000/api/send-otp")
                let AllData = await data.json();
                let len = AllData.length;
                for(let i=len-1;i>=0;i--){
                    let userOtpData = await AllData[i];
                    if(userOtpData.user_email == email){
                        setCurrentOtp(userOtpData.otp);
                        break;
                    }
                }
                alert("otp sent");
            }
            else{
                alert("Email doesn't exist! ");
            }
        })
        .catch(err => console.log(err))
    }
    const VerifyOpts = async(e) => {
        e.preventDefault();
        if(currentOtp == getCurrentOtp){
            emailOtp.current.style.display = "none";
            newPass.current.style.display = "flex";
        }
        else{
            alert("Invalid Otp");
        }        
    }
    const UpdatePass = (e) => {
        e.preventDefault();
        if(password == confirmPass){
            axios.post('http://localhost:3000/api/password-reset',{email,password})
            .then(result => {
                navigate('/login')
            })
            .catch(err => console.log(err))
        }
        else{
            alert("Confirm password is not same");
        }
    }
    const goHome = () => {
        navigate("/")
    }
    
  return (
    <div >
        <div ref={emailOtp} className=' w-[100vw] h-[100vh] flex justify-center items-center ' >
            <div className='bg-smbg bg-center bg-cover w-[100%] h-[100%] fixed xs1:hidden xs2:block  z-[-1] blur-[1.5px] opacity-[0.6]   ' ></div>
            <div className='xs1:w-[100%] xs2:w-[55%] xs3:w-[45%] xs4:w-[33%] xs1:h-[100%] xs2:h-[55%] xs3:h-[50%] xs4:h-[85%] p-[1.5rem] bg-[#ffffffb9] shadow-dull xs2:rounded-[1rem]  ' >
                <div className="action       ">
                    <form className="fieldbox   flex flex-col gap-[1rem]">
                        <div className='flex justify-center xs2:my-[-2.5rem]'>
                            <img onClick={goHome} src={logo} alt="logo" className='w-[8rem] rounded-[5rem] cursor-pointer ' />
                        </div>
                        <div className='flex justify-center' >
                            <h1 className='text-[1.5rem] font-bold ' >Password Reset</h1>
                        </div>
                        <div className="div1 flex flex-col gap-[0.2rem]">
                            <div className='flex justify-between ' >
                                <div className='text-[0.9rem] font-bold ' >Email Address</div> 
                            </div>
                            <input type="email" ref={ReadOnly}  className='border border-[#9e9e9e] bg-transparent h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' required autoComplete='off' placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className="div1 hidden flex-col gap-[0.2rem]" ref={EnterOtp} >
                            <div className='flex justify-between ' >
                                <div className='text-[0.9rem] font-bold ' >OTP</div> 
                            </div>
                            <input type="otp" onChange = {(e)=>{setGetCurrentOtp(e.target.value)}} className='border border-[#9e9e9e] bg-transparent h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' required autoComplete='off' placeholder='Enter otp'  />
                        </div>
                        <div className='self-center flex gap-[1rem] ' >
                            <button onClick={SendOtp} className=' mt-[1.5rem]  border px-[1.2rem] text-[white] text-[0.9rem] font-semibold bg-[#1a1a75] py-[0.3rem] rounded-[0.3rem] ' >{otpbtn}</button>
                            <button type="submit" onClick={VerifyOpts} ref={VerifyBtn} className='hidden mt-[1.5rem]  border px-[1.2rem] text-[white] text-[0.9rem] font-semibold bg-[#1a1a75] py-[0.3rem] rounded-[0.3rem] ' >Verify Otp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div ref={newPass} className=' w-[100vw] h-[100vh] hidden justify-center items-center ' >
        <div className='bg-smbg bg-center bg-cover w-[100%] h-[100%] fixed xs1:hidden xs2:block  z-[-1] blur-[1.5px] opacity-[0.6]   ' ></div>
        <div className='xs1:w-[100%] xs2:w-[55%] xs3:w-[45%] xs4:w-[33%] xs1:h-[100%] xs2:h-[55%] xs3:h-[50%] xs4:h-[85%] p-[1.5rem] bg-[#ffffffb9] shadow-dull xs2:rounded-[1rem]  ' >
            <div className="action       ">
                <form onSubmit={UpdatePass} className="fieldbox   flex flex-col gap-[1rem]">
                    <div className='flex justify-center xs2:my-[-2.5rem]'>
                        <img onClick={goHome} src={logo} alt="logo" className='w-[8rem] rounded-[5rem] cursor-pointer ' />
                    </div>
                    <div className='flex justify-center' >
                        <h1 className='text-[1.5rem] font-bold ' >Password Reset</h1>
                    </div>
                    <div className="div1 flex flex-col gap-[0.2rem]">
                        <div className='flex justify-between ' >
                            <div className='text-[0.9rem] font-bold ' >Email</div> 
                        </div>
                        <input type="email" onChange={(e)=>{setCreatePass(e.target.value)}} className='border border-[#9e9e9e] bg-transparent h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' required autoComplete='off' value={email} readOnly />
                    </div>
                    <div className="div1 flex flex-col gap-[0.2rem]">
                        <div className='flex justify-between ' >
                            <div className='text-[0.9rem] font-bold ' >Create Password</div> 
                        </div>
                        <input type="text" onChange={(e)=>{setCreatePass(e.target.value)}} className='border border-[#9e9e9e] bg-transparent h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' required autoComplete='off' placeholder='Enter new password'  />
                    </div>
                    <div className="div1 flex flex-col gap-[0.2rem]">
                        <div className='flex justify-between ' >
                            <div className='text-[0.9rem] font-bold ' >Confirm Password</div>
                        </div>
                        <input type="text" onChange={(e)=>{setConfirmPass(e.target.value)}} className='border border-[#9e9e9e] bg-transparent h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' required autoComplete='off' placeholder='Enter confirm posword'  />
                    </div>
                    <button type="submit" className=' mt-[1.5rem] self-center border px-[1.2rem] text-[white] text-[0.9rem] font-semibold bg-[#1a1a75] py-[0.3rem] rounded-[0.3rem] ' >Update</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PassForget
