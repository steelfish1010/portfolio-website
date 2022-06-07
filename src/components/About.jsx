import React from 'react';

const About = () => {
	return (
		<div name='about' className='w-full h-screen  bg-[#41464c] text-blue-100'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-orange-600'>
							About
						</p>
					</div>
					<br></br>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi, here are some examples of my work</p>
					</div>
					<div>
						<p>
							I'm a software engineer. This is my first project here. I hope you
							like it.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
