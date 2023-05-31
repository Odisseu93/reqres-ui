import axios from 'axios';
import { UserRes } from './types';

class UserAPI {
	private baseUrl = 'https://reqres.in/api/users/';

	async getAllUsers(): Promise<UserRes | Error> {
		try {

			const { data, statusText} = await axios(this.baseUrl);
			if(!data) return new Error('Users not found! ' + statusText);
			return data;

		} catch (err) {
			return new Error((err as { message: string }).message);
		}
	}
}

export default UserAPI; 