import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-color1 text-color3'>

        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-4'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-color4'>
                        About
                    </p>
                </div>
                <div></div>
            </div>

            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi I'm John nice to meet you.</p>
                </div>
                <div>
                    <p>I am passionate about building robust, reusable software. 
                        Software where someone can pick it up and use it ten years from now. 
                        I have professional experience writing software for software defined radios (SDRs) at the University of New Mexico (UNM) and at The Air Force Research Laboratory (AFRL)</p>
                </div>
            
            
            </div>
            
        </div>

    </div>
  )
}

export default About