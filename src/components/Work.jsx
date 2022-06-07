import React from 'react';
import DnDinder from '../assets/dndinder.png';
import ReactNews from '../assets/news-site-frontend.png';
import NewsAPI from '../assets/news-site-backend.png';

const Work = () => {
	return (
		<div name='work' className='w-full md:h-screen text-blue-100 bg-[#41464c]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-orange-600'>
						Work
					</p>
					<p className='py-6'>Some of my recent work</p>
				</div>
				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${ReactNews})` }}
						className='shadow-lg shadow-[#353535] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-gray-700 tracking-wider'>
								React JS news app
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://the-awesome-steelfish1010-site.netlify.app'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/steelfish1010/nc-news'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${NewsAPI})` }}
						className='shadow-lg shadow-[#353535] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-gray-700 tracking-wider'>
								Express API News Articles
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://my-first-news-app.herokuapp.com/api'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/steelfish1010/my-first-nc-example-project'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${DnDinder})` }}
						className='shadow-lg shadow-[#353535] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className=' text-2xl font-bold text-gray-300  tracking-wider'>
								DnDinder web app: Firebase/React
							</span>
							<div className='pt-8 text-center'>
								<a
									href='https://dndinder-68dcc.firebaseapp.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/boa-constructor/frontend-react-app'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Frontend Code
									</button>
								</a>
								<a
									href='https://github.com/boa-constructor/backend-firebase'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Backend Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${ReactNews})` }}
						className='shadow-lg shadow-[#353535] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						{/* Hover effects */}
						<div className='opacity-0 group-hover:opacity-100 text-center'>
							<span className='text-2xl font-bold text-gray-700 tracking-wider'>
								Coming Soon...
							</span>
							<div className='pt-8 text-center'>
								<a href='/Work' target='_blank' rel='noopener noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a href='/Work' target='_blank' rel='noopener noreferrer'>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
