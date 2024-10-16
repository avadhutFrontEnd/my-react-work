// useUsers.ts 
import { useEffect, useState } from "react";
import userService, { User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
	const [ users, setUsers ] = useState<User[]>([]);
	const [ error, setError ] = useState('');
	const [ isLoading, setLoading ] = useState(false);
	
// Fetch Users List from Server:
  // Option 1 : `then()` and `catch()` method implementation :
	useEffect( () => {
		
		setLoading(true);
		const { request, cancel } = userService.getAll<User>();
		request
			.then( res => {
				setUsers(res.data);
				setLoading(false);   // <---- Success : hide a Loader
			})
			.catch(err => {
				if ( err instanceof CanceledError ) return;
				setError(err.message);
				setLoading(false);   // <---- Fail : hide a Loader
			})
			
		return () => cancel();
	}, []);
	
    return { users, error, isLoading, setUsers, setError };
}

export default useUsers;