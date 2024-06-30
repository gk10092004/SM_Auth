import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/cmedial.png';

const Registation = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()
    const collectData = (e) => {
        e.preventDefault();
        axios.post('https://sm-auth-backend.vercel.app/signup',{name,email,password})
        .then(result => {
            navigate('/login')
        })
        .catch(err => console.log(err))
    }
    const goHome = () => {
        navigate("/")
      }

  return (
    <div className=' w-[100vw] h-[100vh] flex justify-center items-center ' >
        <div className='bg-smbg bg-center bg-cover w-[100%] h-[100%] fixed xs1:hidden xs2:block  z-[-1] blur-[1.5px] opacity-[0.6]   ' ></div>
        <div className='xs1:w-[100%] xs2:w-[55%] xs3:w-[45%] xs4:w-[33%] xs1:h-[100%] xs2:h-[55%] xs3:h-[50%] xs4:h-[85%] p-[1.5rem] bg-[#ffffffb9] shadow-dull xs2:rounded-[1rem]  ' >
            <div className="action       ">
                <form onSubmit={collectData} className="fieldbox   flex flex-col gap-[1rem]">
                    <div className='flex justify-center xs2:my-[-2.5rem]'>
                        <img onClick={goHome} src={logo} alt="logo" className='w-[8rem] rounded-[5rem] cursor-pointer ' />
                    </div>
                    <div className='flex justify-center' >
                        <h1 className='text-[1.5rem] font-bold ' >Sign Up</h1>
                    </div>
                    <div className="div1 flex flex-col gap-[0.2rem]">
                        <div className='flex justify-between ' >
                            <div className='text-[0.9rem] font-bold ' >Name</div> 
                        </div>
                        <input type="text" className='border border-[#9e9e9e] bg-[transparent] h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' placeholder='Enter name' autoComplete='off' required onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className="div1 flex flex-col gap-[0.2rem]">
                        <div className='flex justify-between ' >
                            <div className='text-[0.9rem] font-bold ' >Email Address</div> 
                        </div>
                        <input type="email" className='border border-[#9e9e9e] bg-[transparent] h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' placeholder='Enter email' autoComplete='off' required  onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div className="div1 flex flex-col gap-[0.2rem]">
                        <div className='flex justify-between ' >
                            <div className='text-[0.9rem] font-bold ' >Password</div>
                        </div>
                        <input type="password" className='border border-[#9e9e9e] bg-[transparent] h-[2rem] p-[0.5rem] font-bold outline-none rounded-[0.2rem]' placeholder='Create password' autoComplete='off' required  onChange={(e)=>{setPassword(e.target.value)}} />
                    </div>
                    <button type="submit" className=' mt-[1.5rem] self-center border px-[1.2rem] text-[white] text-[0.9rem] font-semibold bg-[#1a1a75] py-[0.3rem] rounded-[0.3rem] ' >Sign Up</button>
                </form>
            </div>
            <div className="login flex mt-[2rem] xs1:text-[0.9rem] xs2:text-[1rem] ">
                <p className=' text-[#000000] font-semibold ' >If you have account then login from here? </p>
                <div onClick={()=>{navigate('/login')}} className='underline cursor-pointer text-[blue] hover:text-[#000000] ' > login</div>
            </div>
        </div>
    </div>
  )
}

export default Registation
