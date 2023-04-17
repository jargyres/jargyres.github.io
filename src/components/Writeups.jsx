import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Game from './Game';
import OvertheWireBandit from '../assets/writeups/overthewirebandit/b25log2.png'
import OvertheWireKrypton from '../assets/writeups/overthewirekrypton/k1cd.png'
import ShellcodingTips from '../assets/writeups/Shellcoding.jpeg'




const Writeups = () => {
  return (
    <div name='writeups' className='w-full md:h-screen text-color3 bg-color1'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div className='pb-8 flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-color4'>Writeups</p>
                <p className='my-6'>Wargames and CTF Writeups</p>
            </div>

            {/* Grid Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
               {/* Grid Item */}
                <div style={{backgroundImage: `url(${OvertheWireBandit})`}} className='shadow-lg shadow-color2 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            OvertheWire Bandit
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://jargyres.github.io/Writeups/bandit.html'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Writeup</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${OvertheWireKrypton})`}} className='shadow-lg shadow-color2 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            OvertheWire Krypton 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://jargyres.github.io/Writeups/krypton.html'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Writeup</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ShellcodingTips})`}} className='shadow-lg shadow-color2 group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Shellcoding Tips 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://jargyres.github.io/Writeups/shellcodingtips.html'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>View</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Writeups