// App.tsx
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // Option 1 : `then()` and `catch()` method implementation :
  // useEffect( () => {
  // 	axios.get<User[]>('https://jsonplaceholder.typicode.com/xusers')
  // 	.then( res => setUsers(res.data))
  // 	.catch(err => setError(err.message));

  // }, []);


  // Option 2 :
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios
          .get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();
  }, []);


  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
}

export default App;
