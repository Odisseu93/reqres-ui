import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Login: React.FC = () => {
	return (
		<>
			<h1 className="bg-white text-black w-fit h-fit mx-auto">Login <FontAwesomeIcon className="" icon={faPerson} size="sm" /> </h1>
		
		</>
		
	);
};

export default Login;