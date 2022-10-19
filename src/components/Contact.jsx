import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-color1 flex justify-center items-center pt-10 px-4'>
        <form className='flex flex-col max-w-[600px] w-full' action='https://getform.io/f/9ecd9539-ccd1-424b-8194-2e6493e26fbd' method='POST'>
            <div className='pb-8 flex justify-center items-center flex-col'>
                <p className='text-4xl font-bold inline border-b-4 border-color4 text-color3'>Contact</p>
                <p className='text-color3 m-4'>Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-color4 bg-opacity-10 p-2' type="text" placeholder='Name' name='name'></input>
            <input className='my-4 p-2 bg-color4 bg-opacity-10' type="text" placeholder='Email' name='email'></input>
            <textarea className='bg-color4 bg-opacity-10 p-2' placeholder='Message' name='message' rows={10}></textarea>
            <button className='text-color5 border-2 hover:text-color1 hover:bg-color4 hover:border-color4 px-4 py-3 my-2 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact