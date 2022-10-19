import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-color1'>
    {/* // <div name='home' className='w-full h-screen bg-colordark'> */}

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

            <p className='text-[#959595]'>Hi my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-color5'>John Argyres</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-color3'>I'm a full stack developer</h2>
            <p className='text-color5 py-4 max-w-[700px]'>I'm a full stack developer that focuses on building intuitive, simple to use web applications. Right now I am splitting my time between Unity and HTML5 games.</p>

            {/* button */}
            <div>
                <Link to="work" smooth={true} duration={500}>
                        
                    <button className='text-color3 group border-2 px-6 py-3 my-2 flex items-center hover:bg-color4 hover:border-color4 hover:text-color1'>
                        View Work 
                        <span className='group-hover:rotate-90 duration-100'>
                            <HiArrowNarrowRight className='ml-2'></HiArrowNarrowRight>
                        </span>
                    </button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Home