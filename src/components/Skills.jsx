import JavaScript from '../assets/javascript.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Node from '../assets/node.png';
import Firebase from '../assets/firebase.png';
import react from '../assets/react.png';
import Github from '../assets/github.png';
import Express from '../assets/express.jpg';
import Jest from '../assets/jest.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen bg-[#41464c] text-blue-100'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-orange-600'>
						Skills
					</p>
					<p className='py-4'>
						These are some of the technologies I've recently worked with:
					</p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-5'>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={JavaScript}
							alt='javascript icon'
						/>
						<p className='my-4'>JavaScript</p>
					</div>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-4' src={Node} alt='node.js icon' />
						<p className='my-4'>Node.js</p>
					</div>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-4' src={HTML} alt='HTML icon' />
						<p className='my-4'>HTML5</p>
					</div>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={CSS}
							alt='javascript icon'
						/>
						<p className='my-4'>CSS3</p>
					</div>

					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-6'
							src={Firebase}
							alt='Firebase icon'
						/>
						<p className='my-4 pt-4'>Firebase</p>
					</div>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-4'
							src={Express}
							alt='Express icon'
						/>
						<p className='my-4'>Express</p>
					</div>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto pt-6' src={Jest} alt='Jest icon' />
						<p className='my-4 pt-2'>Jest</p>
					</div>
					<div className='shadow-md shadow-[#353535] hover:scale-110 duration-500'>
						<img
							className='w-20 mx-auto pt-6'
							src={Tailwind}
							alt='Tailwind icon'
						/>
						<p className='my-4 pt-2'>Tailwind</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
