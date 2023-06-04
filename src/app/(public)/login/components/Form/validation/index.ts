export default class Validation {
	required(value: unknown, valueName: string) {
		if(typeof value === 'boolean') return true;
		if(!value || value === undefined) throw new Error(`${valueName} is required!`);
		return true;
	}

	emailFormat(email: string) {
		const regEmail = /^[a-zA-Z0-9_.+-]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
		if (!regEmail.test(String(email))) throw new Error('invalid email format');
		return true;
	}
	passwordFormat(password: string) {
		const regPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
		if (!regPassword.test(String(password))) throw new Error('invalid password format, must to be:'+
    '\n\r-At least 8 characters long' +
    '\n\r-Contains at least one uppercase letter'+
    '\n\r-Contains at least one digit' + 
    '\n\r-Contains at least one special character (e.g., !@#$%^&*)');
		return true;
	}

	maxLength(value: any, valueName: string, amount: number) {
		if(String(value).length > amount)
			throw new Error(`${valueName} must contain ${amount} characters or less!`);
		return true;
	}

}