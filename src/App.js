import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './component/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [users, setUsers] = useState([])
  const fetchData=async()=>{
    try {
      const result= await axios.get("https://jsonplaceholder.typicode.com/users")
setUsers(result.data)
console.log(result)
    } catch (error) {
      console.log(error)
    }
  }


useEffect(() => {
  fetchData();
}, []);


  return (
    <div className="App">
<UserList key={users.id} users={users}/>
    </div>
  );
}

export default App;
