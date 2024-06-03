import React from 'react'
import Navbar from './components/NavBar'
import Con from './assets/friends.png'
import { useNavigate } from 'react-router-dom'
const App = () => {
  const Navigate = useNavigate();
  const goHome = () => {
    Navigate("/")
  }
  return (
    <div  >
      <div className='bg-smbg bg-center bg-cover w-[100%] h-[100%] fixed xs1:hidden xs2:block  z-[-1] blur-[8px] opacity-[0.6]   ' ></div>
      <Navbar />
      <div className='flex xs1:flex-col xs2:flex-row h-[100vh]' >
        <div className='xs3:w-[30%] xs2:w-[40%]  xs1:pt-[5rem] xs2:pt-[0rem] xs1:pb-[5rem] xs2:pb-[0rem]  bg-[#9cff9c] xs1:rounded-b-[25rem] xs2:rounded-b-[0rem] xs2:rounded-tr-[50rem] xs2:rounded-br-[50rem] xs1:shadow-low-dull xs2:shadow-dull flex flex-col gap-[1rem] justify-center items-center ' >
          <h1 className='w-[16rem] font-bold cursor-pointer text-[3rem] leading-[3rem] text-center font-Sevi text-[#3e3e3e]' >Welcome to Community</h1>
          <p className='text-center  font-semibold text-[1.3rem] leading-[2rem] text-[#474747] ' ><span className='text-[blue]' >Connect,</span> <span className='text-[#ffb341]'>Share and</span> Engage</p>
        </div>
        <div className='xs2:w-[70%] xs1:mt-[2.5rem] xs2:mt-[0rem]  bg-[#0000ff00] flex flex-col xs2:gap-[8rem] xs3:gap-[10rem] xs4:gap-[0rem] justify-end ' >
          <div className=' p-[1rem] flex flex-col gap-[1rem] justify-center items-center ' >
            <h1 onClick={goHome} className='font-bold cursor-pointer text-[3rem] leading-[3rem] text-center font-Sevi text-[#9cff9c] xs2:drop-shadow-shade ' >CONNECT <br />MEDIA</h1>
            <p className='text-center  font-semibold text-[1.2rem] leading-[2rem] text-[#474747] ' >This is social media plateform, be together and chat  together</p>
          </div>
          <div className=' pb-[1rem] ' >
            <img src={Con} alt="" className='h-[20rem] drop-shadow-shade w-[100%]  xs1:py-[2rem] xs2:py-[0rem] ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App