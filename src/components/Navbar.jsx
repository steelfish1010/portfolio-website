import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#41464c] text-blue-100'>
			<div>
				<img src={logo} alt='logo' style={{ width: '50px' }} />
			</div>
			{/* Menu */}

			<ul className='hidden md:flex'>
				<li>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className='py-6 text-4xl'>
					<Link to='home' onClick={handleClick} smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link to='about' onClick={handleClick} smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link to='skills' onClick={handleClick} smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{' '}
					<Link to='work' onClick={handleClick} smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link to='contact' onClick={handleClick} smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
						<a
							className='flex justify-between items-center w-full text-gray-300'
							href='https://www.linkedin.com/in/alicombes'
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
						<a
							className='flex justify-between items-center w-full text-blue-100'
							href='https://github.com/steelfish1010'
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-500'>
						<a
							className='flex justify-between items-center w-full text-[#202020]'
							href='mailto:amcombes@yahoo.co.uk'
						>
							Mail <HiOutlineMail size={30} color='#202020' />
						</a>
					</li>
					{/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-400'>
						<a
							className='flex justify-between items-center w-full text-black'
							href='/'
						>
							Other <BsFillPersonLinesFill size={30} />
						</a>
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
