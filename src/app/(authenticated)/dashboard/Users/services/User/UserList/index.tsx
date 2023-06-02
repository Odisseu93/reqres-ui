import React from 'react';
import UserAPI from '..';
import Loading from '@/app/components/Loading';

const UserList = async ()=> {
	const api = new UserAPI();
	const users = await api.getAllUsers();

	return (
		<>
			{users instanceof Error ? null : <section className='flex flex-wrap gap-3 p-3 h-fit mx-auto my-6 bg-yellow-100 border border-[#006b8f] shadow-md bg-opacity-40 backdrop-filter backdrop-blur-lg  md:w-9/12 md:flex-row md:justify-center md:rounded-lg '>
				<h2 className='w-full text-xl font-bold text-center'>Users</h2>
				{users.data.map(({ avatar,
					first_name,
					last_name,
					email,
					id }) => {
					return (
						<Loading key={id} color='white' bg='#000f14' time={1000} width={250} height={200}>
							<div  className='p-2 min-w-[200px] mx-auto rounded-md text-white bg-[#000f14] shadow-xl  md:w-1/4'>
								<h3 className='text-2xl text-center'>{first_name}</h3>
								<p className='font-bold text-center'>{email}</p>
								<img className='mx-auto mt-2 rounded-md md:hover:opacity-80 md:w-1/2 ' title={`${first_name} ${last_name} photo`} src={avatar} alt={`${first_name} ${last_name} avatar`} />
							</div>
						</Loading>);
				})}
			</section>}
		</>
	);
};

export default UserList;