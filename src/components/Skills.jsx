import React from 'react'

import CSSIcon from '../assets/css.png'
// import GITHUBIcon from '../assets/github.png'
import CPPLogo from '../assets/cpplogo.png'
import HTMLIcon from '../assets/html.png'
import JAVASCRIPT from '../assets/javascript.png'
import PYTHONIcon from '../assets/python.png'
import CSHARPIcon from '../assets/csharp.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-color1 text-color3'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-color4 py-1'>Skills</p>
                <p className='my-6'>These are the technologies I've worked with</p>
            </div>

            {/* Icon Container */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-color2 hover:scale-105 duration-200'>
                    <img src={HTMLIcon} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>HTML5</p>
                </div>
                <div className='shadow-md shadow-color2 hover:scale-105 duration-200'>
                    <img src={CSSIcon} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-color2 hover:scale-105 duration-200'>
                    <img src={JAVASCRIPT} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-color2 hover:scale-105 duration-200'>
                    <img src={CPPLogo} alt="HTML Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>C++</p>
                </div>
                <div className='shadow-md shadow-color2 hover:scale-105 duration-200'>
                    <img src={PYTHONIcon} alt="Python Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>PYTHON</p>
                </div>
                <div className='shadow-md shadow-color2 hover:scale-105 duration-200'>
                    <img src={CSHARPIcon} alt="C# Icon" className='w-20 mx-auto'/>
                    <p className='my-4'>C#</p>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Skills