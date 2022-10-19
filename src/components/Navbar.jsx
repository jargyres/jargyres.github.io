import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => {setNav(!nav);}

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-color1 text-color3'>
       <div>
            <img src={Logo} alt='Logo' style={{width: '50px'}}></img>
        </div>

        {/* menu */}
        {/* md:flex will show this after the we pass medium width, otherwise hidden */}
        {/* <div className='hidden md:flex'> */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>    
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>    
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>    
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>    
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        {/* </div> */}

        {/* hamburger */}
        {/* hidden until we get below the medium width */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-color1 flex flex-col justify-center items-center text-color4'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        Work
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#0077b5]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/jargyres/'>
                        Linkedin <FaLinkedin size={30}></FaLinkedin>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#f1502f]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/jargyres/'>
                        Github <FaGithub size={30}></FaGithub>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#408280]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='mailto:jta4208@gmail.com'>
                        Email <HiOutlineMail size={30}></HiOutlineMail>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-500 bg-[#707070]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                        Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                    </a>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar