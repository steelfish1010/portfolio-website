import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full h-screen bg-[#41464c] text-gray-300 flex justify-center items-center p-4'
		>
			<form
				method='POST'
				action='https://getform.io/f/20ec8c4c-477f-4d08-9172-549485823901'
				className='flex flex-col max-w-[600px] w-full'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-orange-600 text-blue-100'>
						Contact
					</p>
					<p className='text-gray-300 py-4 '>
						Submit form below or email amcombes@yahoo.co.uk
					</p>
				</div>
				<input
					className=' bg-blue-100 p-2'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='my-4 bg-blue-100 p-2'
					type='email'
					placeholder='Email'
					name='email'
				/>
				<textarea
					className=' bg-blue-100 p-2'
					name='message'
					rows='10'
					placeholder='Message'
				></textarea>
				<button className='text-blue-100 border-2 hover:bg-orange-600 hover:border-orange-600 px-4 py-3 my-8 mx-auto flex items-center '>
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;
