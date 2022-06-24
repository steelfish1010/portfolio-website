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
						<p>
							Full stack developer, data analyst and client-facing consultant
							with a broad range of experience.
						</p>
					</div>
					<div>
						<p>
							Having recently completed a software development bootcamp I’m
							currently looking for a full stack developer role. During the
							bootcamp I excelled in writing clean, functional code alongside
							creating thorough testing suites. I thrive in a collaborative
							working environment and learning at pace. I’m a creative problem
							solver with excellent communication skills and strong commercial
							awareness.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
