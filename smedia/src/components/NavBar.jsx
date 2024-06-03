import React from 'react'
import logo from '../assets/cmedial.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const Navigate = useNavigate();
    const goHome = () => {
        Navigate("/")
    }
    const signUp = () => {
        Navigate("/signup")
    }
    const login = () => {
        Navigate("/login")
    }
  return (
    <div className='w-[100%] xs1:bg-[#9cff9c] xs2:bg-[#ff000000] fixed px-[2rem] py-[1rem] flex justify-center items-center '>
        <nav className='flex justify-between items-center w-[100%]' >
            <div className='m-[-1.5rem]'>
                <img onClick={goHome} src={logo} alt="logo" className='w-[6rem] cursor-pointer rounded-[5rem] ' />
            </div>
            <ul className='flex gap-[1rem]'>
                <li onClick={login} className='border border-[#444dff] xs2:text-[white] xs1:hover:text-[white] hover:border-[#444dff] hover:bg-[#444dff] rounded-[0.3rem] cursor-pointer px-[1rem] py-[0.2rem] font-semibold ' >Login</li>
                <li onClick={signUp} className='border border-[#444dff] bg-[#1a1a75] text-[white] hover:bg-[#444dff] cursor-pointer px-[1rem] py-[0.2rem] rounded-[0.3rem] font-semibold '>Sign up</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar