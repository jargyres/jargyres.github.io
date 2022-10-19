import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './Game';
import BadFightingGameImg from '../assets/badfightinggame.png'
import DIYAntennaStudio from '../assets/antennastudio.jpeg'




const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-color3 bg-color1'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8 flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-color4'>Work</p>
                <p className='my-6'>Check out some of my recent work</p>
            </div>

            {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
               {/* Grid Item */}
                <div style={{backgroundImage: `url(${BadFightingGameImg})`}} className='shadow-lg shadow-color2 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Bad Fighting Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://jargyres.github.io/Bad-Fighting-Game/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/jargyres/Bad-Fighting-Game'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${DIYAntennaStudio})`}} className='shadow-lg shadow-color2 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            IEEE AP/S 2019 Student Competiton: DIY Antenna Studio
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Watch</button>
                            </a>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Work