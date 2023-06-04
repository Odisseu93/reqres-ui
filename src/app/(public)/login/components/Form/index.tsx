'use client';
import { FormEvent,  } from 'react';
import Validation  from './validation/index';
const v = new Validation();

const Form: React.FC = () => {
	
	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget  as HTMLElement;
		const email = (form.querySelector('[name=email]') as HTMLInputElement);
		const passsword = (form.querySelector('[name=password]') as HTMLInputElement);

		// form validation
		v.required(email.value, 'email');
		v.emailFormat(email.value);
		v.maxLength(email.value, 'email', 30);
		v.passwordFormat(passsword.value);

	}


	return (
		<form className='flex flex-col p-2 mx-auto my-2 w-fit ' onSubmit={(e) => handleSubmit(e)}>
			<div className="grid p-2 form-group">
				<label className='ms-2' htmlFor="email">Email</label>
				<input className={'p-1 m-2 text-black rounded-md  w-[75vw] ps-2 outline outline-1 outline-sky-800 md:w-[270px]' + ' before:content-["sdfsgds"] before:ml-0.5 before:text-red-500'} type="email" name="email" id="email" placeholder='Insert your email...' />				
			</div>
			<div className="grid p-2 form-group">
				<label className='ms-2' htmlFor="password">Password</label>
				<input className=' text-black max-w-[200px] outline outline-1 outline-sky-800 m-2 rounded-md p-1 ps-2  ' type="password" name="password" id="password" placeholder='Insert your Password...' />
			</div>
			<button className='outline outline-2 outline-[#000f14] p-2 ms-4 me-auto mt-5 rounded-lg w-fit h-fit bg-white font-semibold text-[#000f14] active:text-[#16FF00] active:bg-[#000f14] md:p-1.5 md:mt-2 md:hover:bg-[#000f14] md:hover:text-white' type="submit">Login</button>
		</form>
	);
};

export default Form;