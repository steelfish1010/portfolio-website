import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
	return (
		<div name='home' className=' w-full h-screen bg-[#41464c]'>
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-orange-600'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-7xl font-bold text-blue-100'>
					Ali Combes
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-blue-400'>
					I'm a software engineer
				</h2>
				<p className='text-blue-300 py-4 '>
					I'm currently looking for a new role.
				</p>
				<div>
					<button className='text-blue-100 group border-2   border-blue-100 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600'>
						<Link to='work' smooth={true} duration={500}>
							View Work
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
