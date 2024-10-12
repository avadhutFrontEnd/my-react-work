// App.tsx
import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface User {
	id: number;
	name: string;
}

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	
	// Option 1 : `then()` and `catch()` method implementation :
	useEffect(() => {
		const controller = new AbortController();
		
		setLoading(true);
		axios.get<User[]>('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
			.then(res => {
				setUsers(res.data);
				setLoading(false);   // <---- Success : hide a Loader
			})
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);   // <---- Fail : hide a Loader
			});

		return () => controller.abort();
	}, []);


	// Option 2 :
	//   useEffect(() => {
	//     const fetchUsers = async () => {
	//       try {
	//         const res = await axios
	//           .get<User[]>("https://jsonplaceholder.typicode.com/users");
	//         setUsers(res.data);
	//       } catch (err) {
	//         setError((err as AxiosError).message);
	//       }
	//     };

	//     fetchUsers();
	//   }, []);


	return (
		<>
			{error && <p className="text-danger">{error}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<ul>
				{users.map((user) => <li key={user.id}>{user.name}</li>)}
			</ul>
		</>
	);
}

export default App;
